1. Read all students
http://localhost:3000/students
Click Send. Returns the list of students.



POST

2. Create a student
http://localhost:3000/students
Select Body → raw → JSON, then enter:
{
  "name": "Rahul"
}


Click Send. Returns the newly created student with its ID.



PUT

3. Update a student
http://localhost:3000/students/1
Select Body → raw → JSON:
{
  "name": "Updated Name"
}


Click Send. Updates student with ID 1.



DELETE

4. Delete a student
http://localhost:3000/students/1
Click Send. Returns a deletion success message.