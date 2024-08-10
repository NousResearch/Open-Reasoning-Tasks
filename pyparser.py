import os
import json
import re

class MarkdownParsingError(Exception):
    pass

def parse_markdown_to_json(markdown_text):

    line_ending = '\r\n' if '\r\n' in markdown_text else '\n'
    
    task = {
        "name": "",
        "description": "",
        "modality": "",
        "diagram": None,
        "citations": None,
        "examples": [],
        "tags": []
    }

    # Helper function to extract content between headers
    def extract_section(start_pattern, end_pattern=None):
        
        if end_pattern:
            match = re.search(f"{start_pattern}(.*?){end_pattern}", markdown_text, re.DOTALL)
        else:
            match = re.search(f"{start_pattern}(.*?)$", markdown_text, re.DOTALL)
        if match:
            return match.group(1).strip()
        return None

    # Extract name (required)
    name_match = re.search(r'^#\s+(.+)$', markdown_text, re.MULTILINE)
    if not name_match:
        raise MarkdownParsingError("Task name not found. Expected '# Task Name' at the start.")
    task["name"] = name_match.group(1).strip()

    # Extract description (required)
    description = extract_section(r'## Description:', r'##')
    if not description:
        raise MarkdownParsingError("Description section not found or empty.")
    task["description"] = description

    # Extract modality (required)
    modality = extract_section(r'## Modality:', r'##')
    if not modality:
        raise MarkdownParsingError("Modality section not found or empty.")
    task["modality"] = modality

    # Extract diagram (optional)
    diagram = extract_section(r'## Diagram \(Optional\):', r'##')
    task["diagram"] = diagram

    # Extract citations (optional)
    citations = extract_section(r'## Citations \(Optional\):', r'##')
    if citations:
        task["citations"] = [citation.strip()[2:] for citation in citations.split('\n') if citation.strip().startswith('-')]

    # Extract examples (required)
    examples_text = extract_section(r'## Examples:', r'## Tags:')
    if not examples_text:
        raise MarkdownParsingError("Examples section not found or empty.")
    
    examples = re.split(r'###\s+Example\s+\d+:', examples_text)
    if len(examples) < 2:  # First split is empty, so we need at least 2 elements
        raise MarkdownParsingError("No examples found. Expected at least one '### Example X:' section.")
    
    for example in examples[1:]:  # Skip the first split as it's empty
        input_match = re.search(r'Input:\s*(.+?)Output:', example, re.DOTALL)
        output_match = re.search(r'Output:\s*(.+?)$', example, re.DOTALL)
        if not input_match or not output_match:
            raise MarkdownParsingError(f"Invalid example format. Expected 'Input:' and 'Output:' sections with code blocks.")
        task["examples"].append([{
        "input": input_match.group(1).replace('\`\`\`', '').strip(),
        "output": output_match.group(1).replace('\`\`\`', '').strip()  # Remove the .replace('\n', line_ending)
        }])


    # Extract tags (required)
    tags_text = extract_section(r'## Tags:')
    if not tags_text:
        raise MarkdownParsingError("Tags section not found or empty.")
    task["tags"] = [tag.strip()[2:] for tag in tags_text.split('\n') if tag.strip().startswith('-')]
    if not task["tags"]:
        raise MarkdownParsingError("No tags found. Expected at least one tag starting with '-'.")

    return task
