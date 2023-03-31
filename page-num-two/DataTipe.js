const form = document.querySelector('form');
const petKind = document.getElementById('pet-kind');
const petName = document.getElementById('pet-name');
const petBreed = document.getElementById('pet-breed');
const petAge = document.getElementById('pet-age');
const petSize = document.getElementById('pet-size');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (petKind.value === '' || petName.value === '' || petBreed.value === '' || petAge.value === '' || petSize.value === '') {
    showError('Please fill in all fields');
  } else {
    showSuccess();
  }
});

function showError(message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error';
  errorDiv.appendChild(document.createTextNode(message));
  form.insertBefore(errorDiv, petKind.nextSibling);
}

function showSuccess() {
  const successDiv = document.createElement('div');
  successDiv.className = 'success';
  successDiv.appendChild(document.createTextNode('Pet information submitted successfully'));
  form.insertBefore(successDiv, petKind.nextSibling);


}
