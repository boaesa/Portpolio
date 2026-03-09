import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

export default function App() {
  const [time, setTime] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#141414] font-sans selection:bg-[#141414] selection:text-white">
      {/* Header */}
      <header className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 md:p-10 border-b border-gray-200/60 items-start">
        <div className="text-4xl font-bold tracking-tighter">LEE BOA<sup className="text-lg">®</sup></div>
        <div className="hidden md:flex flex-col text-[13px] text-gray-500 space-y-1">
          <a href="#works" className="hover:text-black transition-colors w-fit">Works</a>
          <a href="#profile" className="hover:text-black transition-colors w-fit">Profile</a>
        </div>
        <div className="hidden md:flex flex-col text-[13px] text-gray-500 space-y-1">
          <a href="mailto:shebekdq3@sookmyung.ac.kr" className="hover:text-black transition-colors w-fit">Contact</a>
        </div>
        <div className="flex flex-col text-[13px] text-gray-500 text-right md:text-left space-y-1">
          <span>Seoul, South Korea</span>
          <span>{time}</span>
        </div>
      </header>

      <main className="px-6 md:px-10">
        {/* Hero / Intro */}
        <section className="py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-12 flex flex-col items-center justify-center text-center">
            <p className="text-[15px] font-medium tracking-wide text-gray-500 mb-4">단순한 기능보다 넓은 연결을 바라봅니다</p>
            <div 
              className="text-[12vw] font-bold leading-none tracking-tighter cursor-pointer group relative py-4"
              onClick={() => setIsPopupOpen(true)}
            >
              <span className="relative z-10 inline-block px-2 bg-clip-text text-transparent bg-black group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-500 group-hover:scale-105 transition-all duration-500 ease-in-out">LEE BOA</span>
            </div>
            <div 
              className="mt-12 flex items-center gap-2 text-[15px] text-gray-400 hover:text-[#141414] transition-colors font-normal tracking-normal cursor-pointer"
              onClick={() => setIsPopupOpen(true)}
            >
              Read more about me <ArrowRight size={16} />
            </div>
          </div>
        </section>

        {/* Works Section */}
        <section id="works" className="py-20 md:py-32 border-t border-gray-200/60 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-[15px] font-medium mb-1">Featured Works</h2>
            <p className="text-gray-400 text-[13px]">2024 - 2026</p>
          </div>
          <div className="md:col-span-8 space-y-24">
            <div className="flex justify-between items-center text-[15px] font-medium border-b border-gray-200/60 pb-4 mb-8">
              <a href="#works" className="flex items-center gap-1 hover:opacity-70 transition-opacity">Check all projects <ArrowRight size={16} /></a>
              <a href="mailto:shebekdq3@sookmyung.ac.kr" className="flex items-center gap-1 hover:opacity-70 transition-opacity">Contact Me <ArrowRight size={16} /></a>
            </div>

            {/* Work 1 */}
            <div className="group cursor-pointer" onClick={() => setSelectedWork('summerbeach')}>
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-xl font-medium group-hover:text-gray-600 transition-colors">Ambience Video: Summer Beach</h3>
                <div className="flex gap-[2px] text-[11px] font-medium tracking-wider">
                  <span className="bg-[#141414] text-white px-1.5 py-0.5">2025</span>
                  <span className="bg-[#141414] text-white px-1.5 py-0.5">Media Design</span>
                </div>
              </div>
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden mb-6 relative rounded-[15px]">
                 <video src="https://raw.githubusercontent.com/boaesa/Portpolio/f1abc2623092a0fc2d090b5755984b0cc6618ca5/Runway_ocean.mp4" autoPlay loop muted playsInline className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" />
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-2xl">
                3D 캐릭터와 파스텔 톤의 해변 배경을 활용한 앰비언스 영상입니다. 정서적 안정과 휴식을 테마로 하여, 캐릭터의 배치와 환경의 조화를 시각화하는 데 집중했습니다.
              </p>
              <div className="mt-4 flex items-center gap-2 text-[14px] text-gray-400 group-hover:text-[#141414] transition-colors">
                View Project <ArrowRight size={14} />
              </div>
            </div>

            {/* Work: Calendar */}
            <div className="group cursor-pointer" onClick={() => setSelectedWork('calendar')}>
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-xl font-medium group-hover:text-gray-600 transition-colors">Poster: Annual Event Calendar</h3>
                <div className="flex gap-[2px] text-[11px] font-medium tracking-wider">
                  <span className="bg-[#141414] text-white px-1.5 py-0.5">2025</span>
                  <span className="bg-[#141414] text-white px-1.5 py-0.5">Editorial Design</span>
                </div>
              </div>
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden mb-6 relative rounded-[15px]">
                 <img src="https://raw.githubusercontent.com/boaesa/Portpolio/e23eabf7519e8d34e0a79b32e11ac0a4102dbc18/%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A5%E1%84%85%E1%85%A2%E1%86%A8.jpg" alt="Poster Annual Event Calendar" className="object-cover object-[center_20%] w-full h-full scale-[2] group-hover:scale-[2.05] transition-transform duration-700 ease-in-out" referrerPolicy="no-referrer" />
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-2xl">
                2025년 월간 주요 일정을 한눈에 파악할 수 있도록 설계한 캘린더 정보 디자인 프로젝트입니다.
              </p>
              <div className="mt-4 flex items-center gap-2 text-[14px] text-gray-400 group-hover:text-[#141414] transition-colors">
                View Project <ArrowRight size={14} />
              </div>
            </div>

            {/* Work 2 */}
            <div className="group cursor-pointer" onClick={() => setSelectedWork('nonstop')}>
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-xl font-medium group-hover:text-gray-600 transition-colors">Poster: Nonstop</h3>
                <div className="flex gap-[2px] text-[11px] font-medium tracking-wider">
                  <span className="bg-[#141414] text-white px-1.5 py-0.5">2025</span>
                  <span className="bg-[#141414] text-white px-1.5 py-0.5">Advertising Design</span>
                </div>
              </div>
              <div className="aspect-[16/10] bg-gray-100 overflow-hidden mb-6 relative rounded-[15px]">
                 <img src="https://raw.githubusercontent.com/boaesa/Portpolio/d3cad62991b66bddaea28b8ca7b431433e5bb045/%5B%EC%88%99%EA%B4%91%EC%88%99%EB%A7%8C%20%EC%8B%9C%EC%A6%8C11-%EA%B4%91%EA%B3%A0%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4-1%EB%B2%88%5D%20%EC%9D%B4%EB%B3%B4%EC%95%84_%EC%8B%9C%EA%B0%81%EC%98%81%EC%83%81%EB%94%94%EC%9E%90%EC%9D%B8%EA%B3%BC_2415462.png" alt="Poster Nonstop" className="object-cover object-[center_35%] w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" referrerPolicy="no-referrer" />
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-2xl">
                숙광숙만 최우수상 포스터입니다. '멈추지 않을 숙명'이라는 슬로건을 중심으로, 숙명여대 홍보 문구를 제안했습니다.
              </p>
              <div className="mt-4 flex items-center gap-2 text-[14px] text-gray-400 group-hover:text-[#141414] transition-colors">
                View Project <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section id="profile" className="py-20 md:py-32 border-t border-gray-200/60 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-[15px] font-medium mb-1">About Me</h2>
            <p className="text-gray-400 text-[13px]">Lee Boa</p>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {/* Profile Info */}
              <div>
                <h4 className="text-[15px] font-medium mb-6">Profile</h4>
                <ul className="text-[14px] text-gray-500 space-y-4">
                  <li className="flex flex-col"><strong className="font-medium text-[#141414] mb-1">Education</strong> 숙명여자대학교 시각영상디자인과 3학년<br/>(Seoul, South Korea)</li>
                  <li className="flex flex-col"><strong className="font-medium text-[#141414] mb-1">GPA</strong> 4.2 / 4.5</li>
                  <li className="flex flex-col"><strong className="font-medium text-[#141414] mb-1">Contact</strong> shebekdq3@sookmyung.ac.kr</li>
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-[15px] font-medium mb-6">My Skills</h4>
                <ul className="text-[14px] text-gray-500 space-y-2">
                  <li>Adobe Illustrator</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe InDesign</li>
                  <li>Adobe Premiere Pro</li>
                  <li>Adobe After Effects</li>
                  <li>Figma</li>
                </ul>
              </div>

              {/* Strengths */}
              <div>
                <h4 className="text-[15px] font-medium mb-6">Strengths</h4>
                <ul className="text-[14px] text-gray-500 space-y-5">
                  <li>
                    <strong className="font-medium text-[#141414] block mb-1">유연한 계획 수립</strong>
                    Strategic Planning
                  </li>
                  <li>
                    <strong className="font-medium text-[#141414] block mb-1">회복탄력성</strong>
                    High Resilience
                  </li>
                </ul>
              </div>

              {/* Interests */}
              <div>
                <h4 className="text-[15px] font-medium mb-6">Interests</h4>
                <ul className="text-[14px] text-gray-500 space-y-6">
                  <li>
                    <strong className="font-medium text-[#141414] block mb-1">하이킹 및 드라이브</strong>
                    공간의 변화를 경험하는 것을 즐깁니다.
                  </li>
                  <li>
                    <strong className="font-medium text-[#141414] block mb-1">지리학 및 조경</strong>
                    지형의 형태와 배치가 주는 힘에 관심이 많습니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-10 pt-20 pb-10 border-t border-gray-200/60 overflow-hidden flex flex-col items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-[13px]">
          <div>
            <div className="font-medium text-[#141414] mb-1">LEE BOA @2026</div>
            <div className="text-gray-400">All rights reserved</div>
          </div>
          <div>
            <div className="font-medium text-[#141414] mb-1">Made in</div>
            <div className="text-gray-400">Seoul, South Korea</div>
          </div>
          <div>
            <div className="font-medium text-[#141414] mb-1">Interested to work with me?</div>
            <a href="mailto:shebekdq3@sookmyung.ac.kr" className="text-gray-400 hover:text-[#141414] transition-colors">shebekdq3@sookmyung.ac.kr</a>
          </div>
        </div>
        
        {/* Massive Typography */}
        <div className="w-full flex justify-center items-center mt-10">
          <h1 className="text-[18vw] font-bold tracking-tighter leading-none text-[#141414] select-none whitespace-nowrap">
            Portpolio
          </h1>
        </div>
      </footer>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/20 backdrop-blur-sm transition-opacity" onClick={() => setIsPopupOpen(false)}>
          <div 
            className="bg-white w-full max-w-3xl shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 rounded-[15px] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 md:p-12 overflow-y-auto max-h-[90vh]">
              <button 
                className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors z-10"
                onClick={() => setIsPopupOpen(false)}
              >
                <X size={24} />
              </button>
              <h2 className="text-3xl font-medium mb-6 tracking-tight">About Lee Boa</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-[15px]">
              <p>
                시각 및 미디어 디자이너로서 저는 디지털 환경과 인간의 감정이 교차하는 지점에 깊은 관심을 가지고 있습니다. 저의 디자인 철학은 미적으로 아름다울 뿐만 아니라, 단순한 결과물이나 수익 이상의 가치를 담아 우리 공동체가 더 나은 방향으로 연결되는 직관적인 경험을 창조하는 데 중점을 둡니다.
              </p>
              <p>
                현재 숙명여자대학교 시각영상디자인과 3학년 재학 중이며, 그래픽 디자인, UI/UX, 영상 제작 등 다양한 매체를 통해 디자인합니다. 저는 좋은 디자인이 복잡한 아이디어를 단순하고 매력적인 방식으로 전달하며, 우리가 살아가는 세상을 더 가치 있고 살기 좋은 곳으로 만드는 강력한 커뮤니케이션 도구라고 믿습니다.
              </p>
              <p>
                As a visual and media designer, I am deeply interested in the intersection of digital environments and human emotion. My design philosophy focuses on creating intuitive experiences that are not only aesthetically pleasing, but also carry value beyond simple outcomes or profits, connecting our community in a better direction.
              </p>
              <p>
                Currently in my junior year studying Visual & Media Design at Sookmyung Women's University, I design across various mediums including graphic design, UI/UX, and video production. I believe that good design is a powerful communication tool that conveys complex ideas in a simple, engaging way, and makes the world we live in a more valuable and livable place.
              </p>
              <div className="pt-8 border-t border-gray-100 mt-8">
                <h3 className="text-lg font-medium text-black mb-5 tracking-tight">Core Competencies</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px]">
                  <li className="flex items-center gap-3"><div className="w-1 h-1 bg-black rounded-full"></div> UI/UX & Web Design</li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 bg-black rounded-full"></div> Media & Video Production</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
      {/* Work Popup Modal */}
      {selectedWork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/20 backdrop-blur-sm transition-opacity" onClick={() => setSelectedWork(null)}>
          <div 
            className="bg-white w-full max-w-4xl shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 rounded-[15px] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 md:p-12 overflow-y-auto max-h-[90vh]">
              <button 
                className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors z-10"
                onClick={() => setSelectedWork(null)}
              >
                <X size={24} />
              </button>
              
              {selectedWork === 'summerbeach' && (
              <div className="flex flex-col gap-8">
                <div className="aspect-[16/9] bg-gray-100 overflow-hidden relative w-full">
                   <video src="https://raw.githubusercontent.com/boaesa/Portpolio/f1abc2623092a0fc2d090b5755984b0cc6618ca5/Runway_ocean.mp4" autoPlay loop muted playsInline controls className="object-cover w-full h-full" />
                </div>
                <div>
                  <div className="flex gap-[2px] text-[11px] font-medium tracking-wider mb-4">
                    <span className="bg-[#141414] text-white px-1.5 py-0.5">2025</span>
                    <span className="bg-[#141414] text-white px-1.5 py-0.5">Media Design</span>
                  </div>
                  <h2 className="text-3xl font-medium mb-6 tracking-tight">Ambience Video: Summer Beach</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                    <p>
                      3D 캐릭터와 파스텔 톤의 해변 배경을 활용한 앰비언스 영상입니다. 정서적 안정과 휴식을 테마로 하여, 캐릭터의 배치와 환경의 조화를 시각화하는 데 집중했습니다.
                    </p>
                    <p>
                      부드러운 색감과 잔잔한 파도 소리, 그리고 여유롭게 휴식을 취하는 캐릭터의 모습을 통해 시청자에게 편안함을 전달하고자 기획되었습니다. 작업 과정에서 3D 모델링의 질감 표현과 조명 설정에 많은 공을 들여 따뜻하고 몽환적인 분위기를 연출했습니다.
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100 text-[13px] text-gray-400">
                    Tools used: Midjourney, Runway AI
                  </div>
                </div>
              </div>
            )}

            {selectedWork === 'calendar' && (
              <div className="flex flex-col gap-8">
                <div className="bg-gray-100 overflow-hidden relative w-full">
                   <img src="https://raw.githubusercontent.com/boaesa/Portpolio/e23eabf7519e8d34e0a79b32e11ac0a4102dbc18/%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A5%E1%84%85%E1%85%A2%E1%86%A8.jpg" alt="Poster Annual Event Calendar" className="w-full h-auto" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="flex gap-[2px] text-[11px] font-medium tracking-wider mb-4">
                    <span className="bg-[#141414] text-white px-1.5 py-0.5">2025</span>
                    <span className="bg-[#141414] text-white px-1.5 py-0.5">Editorial Design</span>
                  </div>
                  <h2 className="text-3xl font-medium mb-6 tracking-tight">Poster: Annual Event Calendar</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                    <p>
                      2025년 월간 주요 일정을 한눈에 파악할 수 있도록 설계한 캘린더 정보 디자인 프로젝트입니다. 각 부서의 흐름을 수직적인 컬러 라인으로 연결하여 시각적 위계를 정립하고, 방대한 양의 텍스트 데이터를 그리드 시스템 안에 배치했습니다. 사용자가 필요한 일정을 직관적으로 찾아낼 수 있도록 가독성과 기능적 효율성에 집중했습니다.
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100 text-[13px] text-gray-400">
                    Tools used: Adobe Illustrator
                  </div>
                </div>
              </div>
            )}

            {selectedWork === 'nonstop' && (
              <div className="flex flex-col gap-8">
                <div className="bg-gray-100 overflow-hidden relative w-full">
                   <img src="https://raw.githubusercontent.com/boaesa/Portpolio/f1abc2623092a0fc2d090b5755984b0cc6618ca5/%5B%EC%88%99%EA%B4%91%EC%88%99%EB%A7%8C%20%EC%8B%9C%EC%A6%8C11-%EA%B4%91%EA%B3%A0%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4-1%EB%B2%88%5D%20%EC%9D%B4%EB%B3%B4%EC%95%84_%EC%8B%9C%EA%B0%81%EC%98%81%EC%83%81%EB%94%94%EC%9E%90%EC%9D%B8%EA%B3%BC_2415462.png" alt="Poster Nonstop" className="w-full h-auto" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="flex gap-[2px] text-[11px] font-medium tracking-wider mb-4">
                    <span className="bg-[#141414] text-white px-1.5 py-0.5">2025</span>
                    <span className="bg-[#141414] text-white px-1.5 py-0.5">Advertising Design</span>
                  </div>
                  <h2 className="text-3xl font-medium mb-6 tracking-tight">Poster: Nonstop</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                    <p>
                      숙광숙만 최우수상 포스터입니다. '멈추지 않을 숙명'이라는 슬로건을 중심으로, 숙명여대 홍보 문구를 제안했습니다.
                    </p>
                    <p>
                      타이포그래피의 강렬한 대비와 역동적인 레이아웃을 통해 끊임없이 나아가는 학생들의 열정과 에너지를 시각적으로 표현했습니다. 간결하면서도 힘 있는 메시지 전달을 위해 불필요한 장식을 배제하고 텍스트 자체의 조형성에 집중한 작업입니다.
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100 text-[13px] text-gray-400">
                    Tools used: Midjourney AI
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
