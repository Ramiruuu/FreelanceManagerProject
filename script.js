// script.js
let projects = [];

function addProject() {
    const projectName = document.getElementById('project-name').value;
    const clientName = document.getElementById('client-name').value;
    const dueDate = document.getElementById('due-date').value;
    const payment = document.getElementById('payment').value;

    if (!projectName || !clientName || !dueDate || !payment) {
        alert('Please fill in all fields');
        return;
    }

    try {
        const project = {
            projectName,
            clientName,
            dueDate: new Date(dueDate),
            payment: parseFloat(payment),
            status: 'In Progress'
        };

        projects.push(project);
        alert('Project added successfully!');
        clearEntries();
    } catch (error) {
        alert('Invalid input format');
    }
}

function viewProjects() {
    const modal = document.getElementById('project-modal');
    const projectList = document.getElementById('project-list');

    if (projects.length === 0) {
        projectList.innerHTML = 'No projects found.';
    } else {
        projectList.innerHTML = projects.map((project, index) => `
            <div class="project-item">
                ${index + 1}. ${project.projectName} 
                (Client: ${project.clientName}, 
                Due: ${project.dueDate.toISOString().split('T')[0]}, 
                Payment: $${project.payment.toFixed(2)}, 
                Status: ${project.status})
            </div>
        `).join('');
    }

    modal.style.display = 'block';
}

function clearEntries() {
    document.getElementById('project-name').value = '';
    document.getElementById('client-name').value = '';
    document.getElementById('due-date').value = '';
    document.getElementById('payment').value = '';
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}