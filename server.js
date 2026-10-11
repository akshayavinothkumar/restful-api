
const express = require('express');
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: "Akshaya" },
  { id: 2, name: "Priya" }
];

// READ all students
app.get('/students', (req, res) => {
  res.json(students);
});

// READ one student
app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id === Number(req.params.id));
  if (!student) return res.status(404).json({ message: "Not found" });
  res.json(student);
});

// CREATE student
app.post('/students', (req, res) => {
  const student = {
    id: students.length ? Math.max(...students.map(s => s.id)) + 1 : 1,
    name: req.body.name
  };
  students.push(student);
  res.status(201).json(student);
});

// UPDATE student
app.put('/students/:id', (req, res) => {
  const student = students.find(s => s.id === Number(req.params.id));
  if (!student) return res.status(404).json({ message: "Not found" });
  student.name = req.body.name;
  res.json(student);
});

// DELETE student
app.delete('/students/:id', (req, res) => {
  const index = students.findIndex(s => s.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Not found" });
  students.splice(index, 1);
  res.json({ message: "Deleted successfully" });
});

app.listen(3000, () => console.log('Server running on port 3000'));
