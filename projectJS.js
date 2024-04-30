/*
CREATION OF FORM ELEMENT
*/
carousel_form = document.createElement("form")

/*
CREATE CAROUSEL ELEMENT CLASS
*/
function carousel_form_element(){
    this.weekday_label = document.createElement("p");
    this.input1 = document.createElement("input");
    this.input2 = document.createElement("input");
    this.input3 = document.createElement("input");
    this.input4 = document.createElement("input");
    this.input5 = document.createElement("input");
}

/*
CREATE WEEKADAYS LIST
*/
var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

/*
PREPARE A LIST TO HOLD OBJECTS
*/
var weekday_objects = []

/*
CREATE OBJECTS AND PLACE IN LIST
*/
let monday = new carousel_form_element();
let tuesday = new carousel_form_element();
let wednesday = new carousel_form_element();
let thursday = new carousel_form_element();
let friday = new carousel_form_element();
let saturday = new carousel_form_element();
let sunday = new carousel_form_element();

weekday_objects.push(monday);
weekday_objects.push(tuesday);
weekday_objects.push(wednesday);
weekday_objects.push(thursday);
weekday_objects.push(friday);
weekday_objects.push(saturday);
weekday_objects.push(sunday);

/*
CREATE PERSONAL INFO PROMPTS AND ELEMENTS
*/
let name_heading = document.createElement('p')
name_heading.id = "name_prompt"
name_heading.textContent = "Please enter your name:"

let name_input = document.createElement("input");
name_input.type = "text";
name_input.id = "name_input";
name_input.placeholder = "Name";

let email_heading = document.createElement("p");
email_heading.id = "email_prompt";
email_heading.textContent = "Please enter your email:";

let email_input = document.createElement("input");
email_input.type = "text";
email_input.id = "email_input";
email_input.placeholder = "Email";

let goal_heading = document.createElement('p');
goal_heading.id = 'goal_prompt';
goal_heading.textContent = "Please enter your calorie goal:";

let goal_input = document.createElement("input");
goal_input.type = "text";
goal_input.id = "goal_input";
goal_input.placeholder = "Goal";

carousel_form.appendChild(name_heading);
carousel_form.appendChild(name_input);
carousel_form.appendChild(email_heading);
carousel_form.appendChild(email_input);
carousel_form.appendChild(goal_heading);
carousel_form.appendChild(goal_input);

/*
CREATE LARGE FORM
*/
for(i = 0; i < 7; i++){
    weekday = weekdays[i];

    weekday_objects[i].weekday_label.textContent = weekday + ":";

    weekday_objects[i].id = weekday;

    weekday_objects[i].input1.type = "text";
    weekday_objects[i].input1.id = weekday + "Breakfast";
    weekday_objects[i].input1.placeholder = "Enter Breakfast";

    weekday_objects[i].input2.type = "text";
    weekday_objects[i].input2.id = weekday + "Snack1";
    weekday_objects[i].input2.placeholder = "Enter Snack";

    weekday_objects[i].input3.type = "text";
    weekday_objects[i].input3.id = weekday + "Lunch";
    weekday_objects[i].input3.placeholder = "Enter Lunch";

    weekday_objects[i].input4.type = "text";
    weekday_objects[i].input4.id = weekday + "Snack2";
    weekday_objects[i].input4.placeholder = "Enter Snack";

    weekday_objects[i].input5.type = "text";
    weekday_objects[i].input5.id = weekday + "Dinner";
    weekday_objects[i].input5.placeholder = "Enter Dinner";

    
    carousel_form.appendChild(weekday_objects[i].weekday_label);
    carousel_form.appendChild(weekday_objects[i].input1);
    carousel_form.appendChild(weekday_objects[i].input2);
    carousel_form.appendChild(weekday_objects[i].input3);
    carousel_form.appendChild(weekday_objects[i].input4);
    carousel_form.appendChild(weekday_objects[i].input5);


} 

/*
BREAKS INCLUDED FOR FORMATTING
*/
carousel_form.appendChild(document.createElement("br"));
carousel_form.appendChild(document.createElement("br"));

/*
SUBMIT BUTTON
*/
let submit_button = document.createElement("button");
submit_button.type = "submit";
submit_button.textContent = "Submit";
submit_button.id = "submit_button";
carousel_form.appendChild(submit_button);

/*
VALIDATION AND POP-UP GENERATION
*/
carousel_form.addEventListener("submit", function(event){
    event.preventDefault();
    
    if(validate_email(email_input.value.trim())){

        /*
        DOCUMENT GENERATION
        */

        // Basic Data
        let plan = window.open("", "Your Plan", "width=600,height=400");
        plan.document.write("<!DOCTYPE html> <html> <body>")
        plan.document.write(name_input.value + "<br>" + email_input.value + "<br>Goal: " + goal_input.value + " calories<br><br>");
        for(i = 0; i < 7; i++){
            plan.document.write(weekdays[i] + ":<br>");
            plan.document.write("Breakfast - " + weekday_objects[i].input1.value + "<br>");
            plan.document.write("Snack - " + weekday_objects[i].input2.value + "<br>");
            plan.document.write("Lunch - " + weekday_objects[i].input3.value + "<br>");
            plan.document.write("Snack - " + weekday_objects[i].input4.value + "<br>");
            plan.document.write("Dinner - " + weekday_objects[i].input5.value + "<br><br>");
        }
        plan.document.write("</body> </html>")

        // Clear Button
        let pop_up_clear = document.createElement('button');
        pop_up_clear.textContent = "Clear";
        pop_up_clear.id = "pop_up_clear";
        plan.document.body.appendChild(pop_up_clear);

        plan.document.body.appendChild(document.createElement("br"));

        // Download Button
        let pop_up_download = document.createElement("button");
        pop_up_download.textContent = "Download";
        pop_up_download.id = "pop_up_download";
        plan.document.body.appendChild(pop_up_download);

        plan.document.body.appendChild(document.createElement("br"));

        // Print Button
        let pop_up_print = document.createElement('button');
        pop_up_print.textContent = "Print";
        pop_up_print.id = "pop_up_print";
        plan.document.body.appendChild(pop_up_print);
        
        /*
        CLEAR FUNCTIONALITY
        */
        plan.document.getElementById("pop_up_clear").addEventListener("click", function(){
            name_input.value = '';
            email_input.value = '';
            goal_input.value = '';
            for(i = 0; i < 7; i++){
                weekday_objects[i].input1.value = '';
                weekday_objects[i].input2.value = '';
                weekday_objects[i].input3.value = '';
                weekday_objects[i].input4.value = '';
                weekday_objects[i].input5.value = '';
            }
            plan.document.body.innerHTML = '';
            plan.close();
        });

        /*
        DOWNLOAD FUNCTIONALITY
        */
        plan.document.getElementById("pop_up_download").addEventListener("click", function(){
            let plan_data = '';
            plan_data += name_input.value +'\n' + email_input.value + '\n'
            plan_data += "Goal: " + goal_input.value + " calories\n\n"

            for(i = 0; i < 7; i++){
                plan_data += weekdays[i] + '\n';
                plan_data += "Breakfast - " + weekday_objects[i].input1.value + '\n';
                plan_data += "Snack - " + weekday_objects[i].input2.value + '\n';
                plan_data += "Lunch - " + weekday_objects[i].input3.value + '\n';
                plan_data += "Snack - " + weekday_objects[i].input4.value + '\n';
                plan_data += "Dinner - " + weekday_objects[i].input5.value + '\n\n';
            }

            let blob = new Blob([plan_data], {type: 'text/plain'});
            let download_link = document.createElement("a");
            download_link.download = "plan.txt";
            download_link.href = window.URL.createObjectURL(blob);
            download_link.click();
        });

        /*
        PRINT FUNCTIONALITY
        */
        plan.document.getElementById("pop_up_print").addEventListener("click", function(){
            plan.print();
        });
    }
    else{
        window.alert("Invalid Address.");
        email_input.value = "";
        email_input.focus();
    }

})

// Email Validation Pattern Test
function validate_email(email){
    let valid_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return valid_pattern.test(email);
}

/*
ADD FORM TO DOCUMENT
*/
let form_container = document.getElementById("carousel_form_container")
form_container.appendChild(carousel_form);

console.log(carousel_form);
console.log(weekday_objects[0]);