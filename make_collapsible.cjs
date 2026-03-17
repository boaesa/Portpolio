const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Update UX Design Section
html = html.replace(
  /<section id="ux-design-1" class="bg-\[#F5F5F5\] rounded-2xl p-8 md:p-16 shadow-sm border border-gray-100\/50 transition-all duration-300">\s*<div class="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">\s*<h2 class="text-\[24px\] md:text-\[28px\] font-bold text-\[#171717\]">User Experience Design I<\/h2>\s*<p class="text-gray-500 text-\[16px\]">2026<\/p>\s*<\/div>\s*<div>/g,
  `<section id="ux-design-1" class="bg-[#F5F5F5] rounded-2xl p-8 md:p-16 shadow-sm border border-gray-100/50 transition-all duration-300">
        <div class="flex flex-col md:flex-row md:items-center justify-between cursor-pointer group" onclick="toggleSection('ux-content', 'ux-icon')">
          <h2 class="text-[24px] md:text-[28px] font-bold text-[#171717] group-hover:text-gray-600 transition-colors">User Experience Design I</h2>
          <div class="flex items-center justify-between md:justify-end gap-4 mt-2 md:mt-0 w-full md:w-auto">
            <p class="text-gray-500 text-[16px]">2026</p>
            <div id="ux-icon" class="text-gray-400 group-hover:text-gray-600 transition-colors">
              <svg class="icon w-6 h-6" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6"/></svg>
            </div>
          </div>
        </div>
        <div id="ux-content" class="block mt-8 md:mt-12 transition-all duration-300">`
);

// 2. Update Featured Works Section
html = html.replace(
  /<section id="works" class="bg-\[#EBEBEB\] rounded-2xl p-8 md:p-16 shadow-sm border border-gray-100\/50 transition-all duration-300">\s*<div class="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">\s*<h2 class="text-\[24px\] md:text-\[28px\] font-bold text-\[#171717\]">Featured Works<\/h2>\s*<p class="text-gray-500 text-\[16px\]">2024 - 2026<\/p>\s*<\/div>\s*<div>/g,
  `<section id="works" class="bg-[#EBEBEB] rounded-2xl p-8 md:p-16 shadow-sm border border-gray-100/50 transition-all duration-300">
        <div class="flex flex-col md:flex-row md:items-center justify-between cursor-pointer group" onclick="toggleSection('works-content', 'works-icon')">
          <h2 class="text-[24px] md:text-[28px] font-bold text-[#171717] group-hover:text-gray-600 transition-colors">Featured Works</h2>
          <div class="flex items-center justify-between md:justify-end gap-4 mt-2 md:mt-0 w-full md:w-auto">
            <p class="text-gray-500 text-[16px]">2024 - 2026</p>
            <div id="works-icon" class="text-gray-400 group-hover:text-gray-600 transition-colors">
              <svg class="icon w-6 h-6" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6"/></svg>
            </div>
          </div>
        </div>
        <div id="works-content" class="block mt-8 md:mt-12 transition-all duration-300">`
);

// 3. Update Profile Section
html = html.replace(
  /<section id="profile" class="bg-\[#E0E0E0\] rounded-2xl p-8 md:p-16 shadow-sm border border-gray-100\/50 transition-all duration-300">\s*<div class="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">\s*<h2 class="text-\[24px\] md:text-\[28px\] font-bold text-\[#171717\]">Profile<\/h2>\s*<p class="text-gray-500 text-\[16px\]">Lee Boa<\/p>\s*<\/div>\s*<div>/g,
  `<section id="profile" class="bg-[#E0E0E0] rounded-2xl p-8 md:p-16 shadow-sm border border-gray-100/50 transition-all duration-300">
        <div class="flex flex-col md:flex-row md:items-center justify-between cursor-pointer group" onclick="toggleSection('profile-content', 'profile-icon')">
          <h2 class="text-[24px] md:text-[28px] font-bold text-[#171717] group-hover:text-gray-600 transition-colors">Profile</h2>
          <div class="flex items-center justify-between md:justify-end gap-4 mt-2 md:mt-0 w-full md:w-auto">
            <p class="text-gray-500 text-[16px]">Lee Boa</p>
            <div id="profile-icon" class="text-gray-400 group-hover:text-gray-600 transition-colors">
              <svg class="icon w-6 h-6" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6"/></svg>
            </div>
          </div>
        </div>
        <div id="profile-content" class="block mt-8 md:mt-12 transition-all duration-300">`
);

// 4. Update toggleSection function
const oldToggleFn = `    // Accordion toggle
    function toggleSection(contentId, iconId) {
      const content = document.getElementById(contentId);
      const icon = document.getElementById(iconId);
      const section = content.closest('section');
      
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        content.classList.add('block');
        icon.innerHTML = '<svg class="icon w-5 h-5" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6"/></svg>'; // ChevronUp
        if (section) {
          section.classList.remove('py-10', 'md:py-16');
          section.classList.add('py-20', 'md:py-32');
        }
      } else {
        content.classList.add('hidden');
        content.classList.remove('block');
        icon.innerHTML = '<svg class="icon w-5 h-5" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>'; // ChevronDown
        if (section) {
          section.classList.remove('py-20', 'md:py-32');
          section.classList.add('py-10', 'md:py-16');
        }
      }
    }`;

const newToggleFn = `    // Accordion toggle
    function toggleSection(contentId, iconId) {
      const content = document.getElementById(contentId);
      const icon = document.getElementById(iconId);
      const section = content.closest('section');
      
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        content.classList.add('block');
        icon.innerHTML = '<svg class="icon w-6 h-6" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6"/></svg>'; // ChevronUp
        if (section) {
          section.classList.remove('py-6', 'px-8', 'md:py-8', 'md:px-16');
          section.classList.add('p-8', 'md:p-16');
        }
      } else {
        content.classList.add('hidden');
        content.classList.remove('block');
        icon.innerHTML = '<svg class="icon w-6 h-6" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>'; // ChevronDown
        if (section) {
          section.classList.remove('p-8', 'md:p-16');
          section.classList.add('py-6', 'px-8', 'md:py-8', 'md:px-16');
        }
      }
    }`;

html = html.replace(oldToggleFn, newToggleFn);

fs.writeFileSync('index.html', html);
console.log('Successfully updated index.html');
