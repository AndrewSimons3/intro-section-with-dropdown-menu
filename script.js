'use strict';

const featuresBtn = document.getElementById('features');
const featuresDropdown = document.querySelector('.features-dropdown');
const companyBtn = document.getElementById('company');
const companyDropdown = document.querySelector('.company-dropdown');
const sidenav = document.querySelector('#sidenav');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.getElementById('close-btn');
const container = document.querySelector('.container');

function toggleFeaturesDropdown() {
	featuresDropdown.classList.toggle('hide');
}

function toggleCompanyDropdown() {
	companyDropdown.classList.toggle('hide');
}

function openSidenav() {
  sidenav.style.width = '250px';
  container.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
  
}

function closeSidenav(e) {
  e.preventDefault();
  sidenav.style.width = '0px';
  container.style.backgroundColor = 'transparent'
  
}

featuresBtn.addEventListener('click', toggleFeaturesDropdown);
companyBtn.addEventListener('click', toggleCompanyDropdown);
menuBtn.addEventListener('click', openSidenav);
closeBtn.addEventListener('click', closeSidenav);
