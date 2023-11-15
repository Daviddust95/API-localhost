const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Conecta ao banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/lista', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conectado ao servidor');
  })
  .catch((error) => {
    console.error('Erro ao conectar o servidor:', error);
  });

// Define o esquema para as tarefas
const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

// Cria o modelo Task baseado no esquema
const Task = mongoose.model('Task', TaskSchema);

// Permite o uso de JSON no corpo das requisições
app.use(express.json());

// Rota para obter todas as tarefas
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar informações' });
  }
});

// Rota para criar uma nova tarefa
app.post('/tasks', async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
