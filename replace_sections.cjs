const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

const ux_start = content.indexOf('<!-- User Experience Design I Section -->');
const profile_end = content.indexOf('</main>');

if (ux_start !== -1 && profile_end !== -1) {
    const new_sections = `
    <div class="flex flex-col -space-y-6 mt-10 pb-20">
      <!-- User Experience Design I Section -->
      <section id="ux-design-1" class="relative z-10 transition-all duration-300">
        <!-- Tab -->
        <div class="flex">
          <div class="bg-[#F5F5F5] rounded-t-2xl px-8 md:px-12 py-5 cursor-pointer flex items-center gap-6 w-fit shadow-[0_-4px_10px_-2px_rgba(0,0,0,0.05)]" onclick="toggleFolder('ux-content', 'ux-icon')">
            <h2 class="text-[18px] md:text-[20px] font-medium text-[#171717]">User Experience Design I</h2>
            <p class="text-gray-500 text-[15px]">2026</p>
            <button class="text-gray-500" id="ux-icon">
              <svg class="icon w-5 h-5" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6"/></svg>
            </button>
          </div>
        </div>
        <!-- Body -->
        <div class="bg-[#F5F5F5] rounded-b-2xl rounded-tr-2xl p-8 md:p-16 shadow-md border border-gray-100/50">
          <div id="ux-content" class="block">
            <div class="flex flex-wrap items-center gap-8">
              <span class="text-gray-400 font-normal text-[14px]">W03</span>
              <button onclick="openModal('ux-observation')" class="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 hover:border-transparent active:border-transparent hover:text-[#FAFAFA] active:text-[#FAFAFA] hover:bg-[linear-gradient(to_right,#10b981,#0ea5e9,#3b82f6,#6366f1,#8b5cf6)] active:bg-[linear-gradient(to_right,#10b981,#0ea5e9,#3b82f6,#6366f1,#8b5cf6)] transition-all duration-300 hover:scale-105 active:scale-95 text-[14px] font-medium">
                #Observation & Interview
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Works Section -->
      <section id="works" class="relative z-20 transition-all duration-300">
        <!-- Tab -->
        <div class="flex pl-4 md:pl-24">
          <div class="bg-[#EBEBEB] rounded-t-2xl px-8 md:px-12 py-5 cursor-pointer flex items-center gap-6 w-fit shadow-[0_-4px_10px_-2px_rgba(0,0,0,0.05)]" onclick="toggleFolder('works-content', 'works-icon')">
            <h2 class="text-[18px] md:text-[20px] font-medium text-[#171717]">Featured Works</h2>
            <p class="text-gray-500 text-[15px]">2024 - 2026</p>
            <button class="text-gray-500" id="works-icon">
              <svg class="icon w-5 h-5" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
            </button>
          </div>
        </div>
        <!-- Body -->
        <div class="bg-[#EBEBEB] rounded-2xl p-8 md:p-16 shadow-md border border-gray-100/50">
          <div id="works-content" class="hidden">
            <div class="flex justify-between items-center text-[15px] font-medium border-b border-gray-300 pb-4 mb-12">
              <a href="#works" class="flex items-center gap-1 hover:opacity-70 transition-opacity">Check all projects <svg class="icon w-4 h-4" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              <a href="mailto:shebekdq3@sookmyung.ac.kr" class="flex items-center gap-1 hover:opacity-70 transition-opacity">Contact Me <svg class="icon w-4 h-4" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>

            <div class="space-y-24 max-w-4xl mx-auto">
              <!-- Work 1 -->
              <div class="group cursor-pointer" onclick="openWorkModal('summerbeach')">
                <div class="flex justify-between items-end mb-4">
                  <h3 class="text-xl font-medium group-hover:text-gray-600 transition-colors">Ambience Video: Summer Beach</h3>
                  <div class="flex gap-[2px] text-[11px] font-medium tracking-wider">
                    <span class="bg-[#171717] text-[#FAFAFA] px-1.5 py-0.5">2025</span>
                    <span class="bg-[#171717] text-[#FAFAFA] px-1.5 py-0.5">Media Design</span>
                  </div>
                </div>
                <div class="aspect-[16/10] bg-gray-200 overflow-hidden mb-6 relative rounded-[15px]">
                   <video src="https://raw.githubusercontent.com/boaesa/Portpolio/f1abc2623092a0fc2d090b5755984b0cc6618ca5/Runway_ocean.mp4" autoplay loop muted playsinline preload="metadata" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out"></video>
                </div>
                <p class="text-gray-600 text-[15px] leading-relaxed max-w-2xl">
                  3D 캐릭터와 파스텔 톤의 해변 배경을 활용한 앰비언스 영상입니다. 정서적 안정과 휴식을 테마로 하여, 캐릭터의 배치와 환경의 조화를 시각화하는 데 집중했습니다.
                </p>
                <div class="mt-4 flex items-center gap-2 text-[14px] text-gray-500 group-hover:text-[#171717] transition-colors">
                  View Project <svg class="icon w-3.5 h-3.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>

              <!-- Work: Sandam -->
              <div class="group cursor-pointer" onclick="openWorkModal('sandam')">
                <div class="flex justify-between items-end mb-4">
                  <h3 class="text-xl font-medium group-hover:text-gray-600 transition-colors">Project: Sandam</h3>
                  <div class="flex gap-[2px] text-[11px] font-medium tracking-wider">
                    <span class="bg-[#171717] text-[#FAFAFA] px-1.5 py-0.5">2025</span>
                    <span class="bg-[#171717] text-[#FAFAFA] px-1.5 py-0.5">Branding Design</span>
                  </div>
                </div>
                <div class="aspect-[16/10] bg-gray-200 overflow-hidden mb-4 relative rounded-[15px]">
                   <video 
                     src="https://raw.githubusercontent.com/boaesa/Portpolio/9bcfbecb226a711ffa33a995c19021303f384fd1/Sequence%2001_1.mp4" 
                     autoplay 
                     muted 
                     playsinline 
                     preload="metadata"
                     class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                     onended="setTimeout(() => { this.play().catch(e => console.error(e)) }, 2500)"
                   ></video>
                </div>
                <div class="aspect-[16/10] bg-gray-200 overflow-hidden mb-6 relative rounded-[15px] flex">
                   <div class="w-1/2 h-full overflow-hidden">
                     <img src="https://raw.githubusercontent.com/boaesa/Portpolio/16c10bed5aaec15cbc09d2785289d41a0afae1e2/BD_pattern_new.jpg" alt="Pattern Sandam 1" loading="lazy" decoding="async" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" referrerpolicy="no-referrer" />
                   </div>
                   <div class="w-1/2 h-full overflow-hidden">
                     <img src="https://raw.githubusercontent.com/boaesa/Portpolio/16c10bed5aaec15cbc09d2785289d41a0afae1e2/%E1%84%87%E1%85%B3%E1%84%83%E1%85%B5%20%E1%84%91%E1%85%A2%E1%84%90%E1%85%A5%E1%86%AB2_%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%86%A8.png" alt="Pattern Sandam 2" loading="lazy" decoding="async" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" referrerpolicy="no-referrer" />
                   </div>
                </div>
                <p class="text-gray-600 text-[15px] leading-relaxed max-w-2xl">
                  '산이 들려주는 이야기'라는 의미를 담아, 도심 속 현대인에게 산림 보전의 가치와 생태계의 생명력을 전하는 캠페인 브랜딩 프로젝트입니다. 청록과 연두의 컬러 시스템을 통해 자연 본연의 생동감과 인간과의 조화로운 공존을 감각적으로 시각화했습니다.
                </p>
                <div class="mt-4 flex items-center gap-2 text-[14px] text-gray-500 group-hover:text-[#171717] transition-colors">
                  View Project <svg class="icon w-3.5 h-3.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>

              <!-- Work: Calendar -->
              <div class="group cursor-pointer" onclick="openWorkModal('calendar')">
                <div class="flex justify-between items-end mb-4">
                  <h3 class="text-xl font-medium group-hover:text-gray-600 transition-colors">Poster: Annual Event Calendar</h3>
                  <div class="flex gap-[2px] text-[11px] font-medium tracking-wider">
                    <span class="bg-[#171717] text-[#FAFAFA] px-1.5 py-0.5">2025</span>
                    <span class="bg-[#171717] text-[#FAFAFA] px-1.5 py-0.5">Editorial Design</span>
                  </div>
                </div>
                <div class="aspect-[16/10] bg-gray-200 overflow-hidden mb-6 relative rounded-[15px]">
                   <img src="https://raw.githubusercontent.com/boaesa/Portpolio/e23eabf7519e8d34e0a79b32e11ac0a4102dbc18/%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A5%E1%84%85%E1%85%A2%E1%86%A8.jpg" alt="Poster Annual Event Calendar" loading="lazy" decoding="async" class="object-cover object-[center_20%] w-full h-full scale-[2] group-hover:scale-[2.05] transition-transform duration-700 ease-in-out" referrerpolicy="no-referrer" />
                </div>
                <p class="text-gray-600 text-[15px] leading-relaxed max-w-2xl">
                  2025년 월간 주요 일정을 한눈에 파악할 수 있도록 설계한 캘린더 정보 디자인 프로젝트입니다.
                </p>
                <div class="mt-4 flex items-center gap-2 text-[14px] text-gray-500 group-hover:text-[#171717] transition-colors">
                  View Project <svg class="icon w-3.5 h-3.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>

              <!-- Work 2 -->
              <div class="group cursor-pointer" onclick="openWorkModal('nonstop')">
                <div class="flex justify-between items-end mb-4">
                  <h3 class="text-xl font-medium group-hover:text-gray-600 transition-colors">Poster: Nonstop</h3>
                  <div class="flex gap-[2px] text-[11px] font-medium tracking-wider">
                    <span class="bg-[#171717] text-[#FAFAFA] px-1.5 py-0.5">2025</span>
                    <span class="bg-[#171717] text-[#FAFAFA] px-1.5 py-0.5">Advertising Design</span>
                  </div>
                </div>
                <div class="aspect-[16/10] bg-gray-200 overflow-hidden mb-6 relative rounded-[15px]">
                   <img src="https://raw.githubusercontent.com/boaesa/Portpolio/d3cad62991b66bddaea28b8ca7b431433e5bb045/%5B%EC%88%99%EA%B4%91%EC%88%99%EB%A7%8C%20%EC%8B%9C%EC%A6%8C11-%EA%B4%91%EA%B3%A0%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4-1%EB%B2%88%5D%20%EC%9D%B4%EB%B3%B4%EC%95%84_%EC%8B%9C%EA%B0%81%EC%98%81%EC%83%81%EB%94%94%EC%9E%90%EC%9D%B8%EA%B3%BC_2415462.png" alt="Poster Nonstop" loading="lazy" decoding="async" class="object-cover object-[center_35%] w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" referrerpolicy="no-referrer" />
                </div>
                <p class="text-gray-600 text-[15px] leading-relaxed max-w-2xl">
                  숙광숙만 최우수상 포스터입니다. '멈추지 않을 숙명'이라는 슬로건을 중심으로, 숙명여대 홍보 문구를 제안했습니다.
                </p>
                <div class="mt-4 flex items-center gap-2 text-[14px] text-gray-500 group-hover:text-[#171717] transition-colors">
                  View Project <svg class="icon w-3.5 h-3.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Profile Section -->
      <section id="profile" class="relative z-30 transition-all duration-300">
        <!-- Tab -->
        <div class="flex pl-8 md:pl-48">
          <div class="bg-[#E0E0E0] rounded-t-2xl px-8 md:px-12 py-5 cursor-pointer flex items-center gap-6 w-fit shadow-[0_-4px_10px_-2px_rgba(0,0,0,0.05)]" onclick="toggleFolder('profile-content', 'profile-icon')">
            <h2 class="text-[18px] md:text-[20px] font-medium text-[#171717]">Profile</h2>
            <p class="text-gray-500 text-[15px]">Lee Boa</p>
            <button class="text-gray-500" id="profile-icon">
              <svg class="icon w-5 h-5" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6"/></svg>
            </button>
          </div>
        </div>
        <!-- Body -->
        <div class="bg-[#E0E0E0] rounded-2xl p-8 md:p-16 shadow-md border border-gray-100/50">
          <div id="profile-content" class="block">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-6xl mx-auto">
              <!-- Profile Info -->
              <div>
                <h4 class="text-[16px] font-medium mb-6 text-[#171717]">Profile</h4>
                <ul class="text-[14px] text-gray-600 space-y-4">
                  <li class="flex flex-col"><strong class="font-medium text-[#171717] mb-1">Education</strong> 숙명여자대학교 시각영상디자인과 3학년<br/>(Seoul, South Korea)</li>
                  <li class="flex flex-col"><strong class="font-medium text-[#171717] mb-1">GPA</strong> 4.2 / 4.5</li>
                  <li class="flex flex-col"><strong class="font-medium text-[#171717] mb-1">Contact</strong> shebekdq3@sookmyung.ac.kr</li>
                </ul>
              </div>

              <!-- Skills -->
              <div>
                <h4 class="text-[16px] font-medium mb-6 text-[#171717]">My Skills</h4>
                <ul class="text-[14px] text-gray-600 space-y-2">
                  <li>Adobe Illustrator</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe InDesign</li>
                  <li>Adobe Premiere Pro</li>
                  <li>Adobe After Effects</li>
                  <li>Figma</li>
                </ul>
              </div>

              <!-- Strengths -->
              <div>
                <h4 class="text-[16px] font-medium mb-6 text-[#171717]">Strengths</h4>
                <ul class="text-[14px] text-gray-600 space-y-5">
                  <li>
                    <strong class="font-medium text-[#171717] block mb-1">유연한 계획 수립</strong>
                    Strategic Planning
                  </li>
                  <li>
                    <strong class="font-medium text-[#171717] block mb-1">회복탄력성</strong>
                    High Resilience
                  </li>
                </ul>
              </div>

              <!-- Interests -->
              <div>
                <h4 class="text-[16px] font-medium mb-6 text-[#171717]">Interests</h4>
                <ul class="text-[14px] text-gray-600 space-y-6">
                  <li>
                    <strong class="font-medium text-[#171717] block mb-1">하이킹 및 드라이브</strong>
                    공간의 변화를 경험하는 것을 즐깁니다.
                  </li>
                  <li>
                    <strong class="font-medium text-[#171717] block mb-1">지리학, 지정학 및 조경</strong>
                    지형의 형태와 배치가 주는 힘에 관심이 많습니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    `;
    
    content = content.substring(0, ux_start) + new_sections + '\n  ' + content.substring(profile_end);
    fs.writeFileSync('index.html', content);
}
