import csv
import json

def generate_gas():
    filename = 'study_circle_google_forms_question_bank.csv'
    
    script_content = [
        "function createStudyCircleForm() {",
        "  var form = FormApp.create('Study Circle Enrollment Form');",
        "  form.setIsQuiz(false);",
        ""
    ]
    
    with open(filename, mode='r', encoding='utf-8-sig') as file:
        reader = csv.DictReader(file)
        print("CSV Keys found:", reader.fieldnames)
        for row in reader:
            row_type = row.get('Row Type', '').strip().upper()
            section_title = row.get('Section Title', '').strip()
            section_desc = row.get('Section Description', '').strip()
            q_title = row.get('Question Title', '').strip()
            q_type = row.get('Question Type', '').strip()
            required = row.get('Required', '').strip().lower() == 'yes'
            help_text = row.get('Help Text', '').strip()
            
            options = []
            for i in range(1, 16):
                opt = row.get(f'Option {i}', '').strip()
                if opt:
                    options.append(opt)
            
            if row_type == 'FORM':
                script_content.append(f"  form.setTitle({json.dumps(q_title)});")
                if help_text:
                    script_content.append(f"  form.setDescription({json.dumps(help_text)});")
                elif section_desc:
                    script_content.append(f"  form.setDescription({json.dumps(section_desc)});")
            
            elif row_type == 'SECTION':
                if section_title and section_title != 'FORM INFO':
                    script_content.append(f"  var section = form.addPageBreakItem().setTitle({json.dumps(section_title)});")
                    if section_desc:
                        script_content.append(f"  section.setHelpText({json.dumps(section_desc)});")
            
            elif row_type == 'QUESTION':
                if q_type == 'Short answer':
                    script_content.append(f"  var item = form.addTextItem().setTitle({json.dumps(q_title)});")
                elif q_type == 'Paragraph':
                    script_content.append(f"  var item = form.addParagraphTextItem().setTitle({json.dumps(q_title)});")
                elif q_type == 'Multiple choice':
                    script_content.append(f"  var item = form.addMultipleChoiceItem().setTitle({json.dumps(q_title)});")
                    if options:
                        opts_js = ", ".join([f"item.createChoice({json.dumps(o)})" for o in options])
                        script_content.append(f"  item.setChoices([{opts_js}]);")
                elif q_type == 'Checkboxes':
                    script_content.append(f"  var item = form.addCheckboxItem().setTitle({json.dumps(q_title)});")
                    if options:
                        opts_js = ", ".join([f"item.createChoice({json.dumps(o)})" for o in options])
                        script_content.append(f"  item.setChoices([{opts_js}]);")
                
                if 'item' in script_content[-1]:
                    if required:
                        script_content.append("  item.setRequired(true);")
                    if help_text:
                        script_content.append(f"  item.setHelpText({json.dumps(help_text)});")
            
            script_content.append("")

    script_content.append("  Logger.log('Form created: ' + form.getEditUrl());")
    script_content.append("}")
    
    with open('Code.gs', 'w', encoding='utf-8') as f:
        f.write("\n".join(script_content))
    
    # Generate JSON for web app
    form_data = []
    with open(filename, mode='r', encoding='utf-8-sig') as file:
        reader = csv.DictReader(file)
        current_section = None
        for row in reader:
            row_type = row.get('Row Type', '').strip().upper()
            if row_type == 'SECTION':
                current_section = {
                    "title": row.get('Section Title', '').strip(),
                    "description": row.get('Section Description', '').strip(),
                    "questions": []
                }
                form_data.append(current_section)
            elif row_type == 'QUESTION':
                options = []
                for i in range(1, 16):
                    opt = row.get(f'Option {i}', '').strip()
                    if opt: options.append(opt)
                
                q = {
                    "id": row.get('Question Number', '').strip(),
                    "title": row.get('Question Title', '').strip(),
                    "type": row.get('Question Type', '').strip(),
                    "required": row.get('Required', '').strip().lower() == 'yes',
                    "helpText": row.get('Help Text', '').strip(),
                    "options": options
                }
                if current_section:
                    current_section["questions"].append(q)
    
    with open('web-form/src/form-data.json', 'w', encoding='utf-8') as f:
        json.dump(form_data, f, indent=2)
        
    print("Code.gs and form-data.json generated successfully.")

if __name__ == "__main__":
    generate_gas()
