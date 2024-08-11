# This file check all the .md files from task folder and convert them into json (with proper error check and formatting) and put them in task-json folder.
import os
import json
import re
from pyparser import *

def process_tasks(tasks_folder, json_folder):
    # Create the JSON folder if it doesn't exist
    os.makedirs(json_folder, exist_ok=True)

    # Get a list of all markdown files in the tasks folder
    md_files = [f for f in os.listdir(tasks_folder) if f.endswith('.md')]

    for md_file in md_files:
        # Construct full paths for markdown and json files
        md_path = os.path.join(tasks_folder, md_file)
        json_file = md_file.replace('.md', '.json')
        json_path = os.path.join(json_folder, json_file)

        # Check if JSON file needs to be created or updated
        if not os.path.exists(json_path) or os.path.getmtime(md_path) > os.path.getmtime(json_path):
            print(f"Processing {md_file}...")

            try:
                # Read the markdown file
                with open(md_path, 'r', encoding='utf-8') as md_file:
                    markdown_content = md_file.read()

                # Parse markdown to JSON
                json_content = parse_markdown_to_json(markdown_content)

                # Write the JSON content to file
                with open(json_path, 'w', encoding='utf-8', newline='\n') as json_file:
                    json.dump(json_content, json_file, indent=2, ensure_ascii=False)
                    json_file.write('\n')  # Add a final newline

                print(f"Successfully converted and saved {json_file}")
            except MarkdownParsingError as e:
                # Handle specific markdown parsing errors
                print(f"Error processing {md_file}: {str(e)}")
            except Exception as e:
                # Handle any other unexpected errors
                print(f"Unexpected error processing {md_file}: {str(e)}")
        else:
            # Skip processing if JSON file is up to date
            print(f"Skipping {md_file} - JSON file already up to date")

if __name__ == "__main__":
    # Define folder paths
    tasks_folder = "tasks"
    json_folder = "tasks-json"

    # Run the main processing function
    process_tasks(tasks_folder, json_folder)
