'use strict';

const featuresBtn = document.getElementById('features');
const featuresDropdown = document.querySelector('.features-dropdown');
const companyBtn = document.getElementById('company');
const companyDropdown = document.querySelector('.company-dropdown');

function toggleFeaturesDropdown() {
	featuresDropdown.classList.toggle('hide');
}

function toggleCompanyDropdown() {
	companyDropdown.classList.toggle('hide');
}

featuresBtn.addEventListener('click', toggleFeaturesDropdown);
companyBtn.addEventListener('click', toggleCompanyDropdown);
