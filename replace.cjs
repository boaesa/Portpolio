const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');
content = content.replace(/bg-white/g, 'bg-[#FAFAFA]');
content = content.replace(/text-white/g, 'text-[#FAFAFA]');
content = content.replace(/bg-black/g, 'bg-[#171717]');
content = content.replace(/text-black/g, 'text-[#171717]');
content = content.replace(/border-black/g, 'border-[#171717]');
content = content.replace(/hover:text-black/g, 'hover:text-[#171717]');
content = content.replace(/hover:bg-black/g, 'hover:bg-[#171717]');
content = content.replace(/hover:border-black/g, 'hover:border-[#171717]');
content = content.replace(/active:text-white/g, 'active:text-[#FAFAFA]');

const start_idx = content.indexOf('<template id="ux-observation-template">');
const end_idx = content.indexOf('</template>', start_idx);

if (start_idx !== -1 && end_idx !== -1) {
    let popup_content = content.substring(start_idx, end_idx);
    
    popup_content = popup_content.replace(/bg-\[#141414\]/g, 'bg-[#5A5A5A]');
    popup_content = popup_content.replace(/border border-gray-200 rounded-\[12px\] overflow-hidden mb-4/g, 'border border-gray-200 rounded-[12px] overflow-hidden mb-[31px]');
    popup_content = popup_content.replace(/mb-\[30px\]/g, 'mb-[40px]');
    popup_content = popup_content.replace(/space-y-12/g, 'space-y-[58px]');
    
    content = content.substring(0, start_idx) + popup_content + content.substring(end_idx);
}

fs.writeFileSync('index.html', content);
