let role="student",sDay=0,tDay=0;
/* Support chat cleanup: remove old test messages once after upgrade. */
if(!localStorage.getItem('skorSupportCleanupV2')){localStorage.removeItem('skorSupportConversations');localStorage.setItem('skorSupportCleanupV2','1');}


const studentSchedule=[
{name:"Понедельник",date:"09.09",lessons:[
["08:00–09:35","МДК.05.03 Тестирование информационных систем","Лабораторная","Федот Гаврильевич Савин","209",2],
["09:50–11:25","ОГСЭ.04 Иностранный язык в профессиональной деятельности","Практика","Виктория Викторовна Софронова","209",2],
["11:40–13:15","МДК.05.04 Разработка мобильных приложений","Лабораторная","Марианна Евгеньевна Степанова","209",2],
["15:50–17:25","МДК.07.02 Сертификация информационных систем","Лекция","Алексей Владимирович Корякин","1",1]]},
{name:"Вторник",date:"10.09",lessons:[
["09:50–11:25","ОП.05 Правовое обеспечение профессиональной деятельности","Лекция","Има Марковна Алексеева","305",2],
["11:40–13:15","ОП.07 Экономика отрасли","Практика","Тамара Михайловна Майзик","214",1],
["15:50–17:25","ОП.12 Менеджмент в профессиональной деятельности","Практика","Айгуль Реснянская","214",2]]},
{name:"Среда",date:"11.09",lessons:[
["08:00–09:35","ОГСЭ.05 Физическая культура","Практика","Иван Иванович Новгородов / Мария Гаврильевна Окоютова","Спортзал",2],
["11:40–13:15","ОГСЭ.04 Иностранный язык в профессиональной деятельности","Практика","Виктория Викторовна Софронова","209",2],
["15:50–17:25","МДК.06.03 Устройство и функционирование информационной системы","Практика","Михаил Анатольевич Потапов","Лаб. 2",0]]},
{name:"Четверг",date:"12.09",lessons:[
["13:30–15:05","МДК.05.04 Разработка мобильных приложений","Лабораторная","Марианна Евгеньевна Степанова","209",2],
["15:50–17:25","ОГСЭ.01 Основы философии","Лекция","Анна Альбертовна Мокунова","3",1]]},
{name:"Пятница",date:"13.09",lessons:[
["08:00–09:35","МДК.07.02 Сертификация информационных систем","Практика","Алексей Владимирович Корякин","1",2],
["09:50–11:25","ОП.07 Экономика отрасли","Практика","Тамара Михайловна Майзик","214",2],
["11:40–13:15","МДК.05.03 Тестирование информационных систем","Лабораторная","Федот Гаврильевич Савин","209",1],
["15:50–17:25","МДК.06.03 Устройство и функционирование информационной системы","Лабораторная","Михаил Анатольевич Потапов","209",2]]},
{name:"Суббота",date:"14.09",lessons:[
["09:50–11:25","ОП.05 Правовое обеспечение профессиональной деятельности","Практика","Има Марковна Алексеева","305",2],
["11:40–13:15","ОП.12 Менеджмент в профессиональной деятельности","Практика","Айгуль Реснянская","214",2]]},
{name:"Воскресенье",date:"15.09",lessons:[]}
];

const teacherSchedule=[
{name:"Понедельник",date:"09.09",lessons:[
["08:00–09:35","МДК.06.03 Устройство и функционирование информационной системы","Лабораторная","ИСИП-24-4","209",2],
["11:40–13:15","МДК.06.03 Устройство и функционирование информационной системы","Лабораторная","ИСИП-24-5","209",2]]},
{name:"Вторник",date:"10.09",lessons:[
["09:50–11:25","МДК.06.03 Устройство и функционирование информационной системы","Лекция","ИСИП-24-6","209",2]]},
{name:"Среда",date:"11.09",lessons:[
["11:40–13:15","МДК.06.03 Устройство и функционирование информационной системы","Лабораторная","ИСИП-24-5","209",2],
["15:50–17:25","МДК.06.03 Устройство и функционирование информационной системы","Лабораторная","ИСИП-24-4","209",2],
["17:40–19:15","МДК.06.03 Устройство и функционирование информационной системы","Практика","ИСИП-24-6","209",1]]},
{name:"Четверг",date:"12.09",lessons:[
["13:30–15:05","МДК.06.03 Устройство и функционирование информационной системы","Лабораторная","ИСИП-24-5","209",2]]},
{name:"Пятница",date:"13.09",lessons:[
["08:00–09:35","МДК.06.03 Устройство и функционирование информационной системы","Практика","ИСИП-24-4","209",2],
["09:50–11:25","МДК.06.03 Устройство и функционирование информационной системы","Лабораторная","ИСИП-24-5","209",1]]},
{name:"Суббота",date:"14.09",lessons:[
["09:50–11:25","МДК.06.03 Устройство и функционирование информационной системы","Практика","ИСИП-24-6","209",2],
["11:40–13:15","МДК.06.03 Устройство и функционирование информационной системы","Лабораторная","ИСИП-24-4","209",2]]},
{name:"Воскресенье",date:"15.09",lessons:[]}
];

const subjects=[
["ОГСЭ.04 Иностранный язык в профессиональной деятельности","Виктория Викторовна Софронова",17,15,32],
["ОГСЭ.05 Физическая культура","Иван Иванович Новгородов; Мария Гаврильевна Окоютова",16,14,30],
["ОП.05 Правовое обеспечение профессиональной деятельности","Има Марковна Алексеева",15,13,28],
["ОП.07 Экономика отрасли","Тамара Михайловна Майзик",14,12,26],
["ОП.12 Менеджмент в профессиональной деятельности","Айгуль Реснянская",16,13,29],
["МДК.05.03 Тестирование информационных систем","Федот Гаврильевич Савин",17,14,31],
["МДК.05.04 Разработка мобильных приложений","Марианна Евгеньевна Степанова",18,16,34],
["МДК.06.03 Устройство и функционирование информационной системы","Михаил Анатольевич Потапов",16,15,31],
["МДК.07.02 Сертификация информационных систем","Алексей Владимирович Корякин",15,14,29],
["ОГСЭ.01 Основы философии","Анна Альбертовна Мокунова",16,14,30]
];

const courses=[
["ОГСЭ.04 Иностранный язык в профессиональной деятельности","Виктория Викторовна Софронова",5,5],
["ОГСЭ.05 Физическая культура","Иван Иванович Новгородов; Мария Гаврильевна Окоютова",2,2],
["ОП.05 Правовое обеспечение профессиональной деятельности","Има Марковна Алексеева",4,4],
["ОП.07 Экономика отрасли","Тамара Михайловна Майзик",3,3],
["ОП.12 Менеджмент в профессиональной деятельности","Айгуль Реснянская",4,4],
["МДК.05.03 Тестирование информационных систем","Федот Гаврильевич Савин",5,5],
["МДК.05.04 Разработка мобильных приложений","Марианна Евгеньевна Степанова",5,5],
["МДК.06.03 Устройство и функционирование информационной системы","Михаил Анатольевич Потапов",5,5],
["МДК.07.02 Сертификация информационных систем","Алексей Владимирович Корякин",4,4],
["ОГСЭ.01 Основы философии","Анна Альбертовна Мокунова",4,4]
];

const teacherRatingsDefault={
"Виктория Викторовна Софронова":{sum:47,count:10},
"Иван Иванович Новгородов":{sum:46,count:10},
"Мария Гаврильевна Окоютова":{sum:44,count:10},
"Има Марковна Алексеева":{sum:48,count:11},
"Тамара Михайловна Майзик":{sum:45,count:10},
"Айгуль Реснянская":{sum:43,count:10},
"Федот Гаврильевич Савин":{sum:46,count:10},
"Марианна Евгеньевна Степанова":{sum:49,count:11},
"Михаил Анатольевич Потапов":{sum:47,count:10},
"Алексей Владимирович Корякин":{sum:45,count:10},
"Анна Альбертовна Мокунова":{sum:44,count:10}
};
const teacherList=Object.keys(teacherRatingsDefault);

const names=[
"Алексеева Анастасия Михайловна","Антипин Петр Ильич","Васильева Александра Эдуардовна","Высоцкая Анастасия Михайловна",
"Григорьева Анита Алексеевна","Ефремов Александр Андреевич","Заровняев Вячеслав Анатольевич","Иванова Айна Алексеевна",
"Иванова Анастасия Борисовна","Калачиков Никита Юрьевич","Лыткин Егор Никитович","Макаров Сулус Андреевич",
"Махарова Любовь Ивановна","Налесник Евгений Иванович","Наумов Георгий Александрович","Павлов Айаал Алексеевич",
"Созонов Даниил Евгеньевич","Соломонов Айхал Тимурович","Степанов Соломон Станиславович","Черкашин Вячеслав Алексеевич",
"Сидорова Мария Петровна","Сидоров Алексей Николаевич","Федорова Ксения Андреевна"
];

const teacherGrades={};
const gradeDates=["08.09.2025","15.09.2025","22.09.2025","29.09.2025","06.10.2025"];
function getGrades(g){
 if(!teacherGrades[g]) teacherGrades[g]=names.map((_,i)=>gradeDates.map((__,j)=> i%7===0?1:i%5===0?0:2));
 return teacherGrades[g];
}


function splitTeachers(value){return String(value||"").split(";").map(x=>x.trim()).filter(Boolean)}
function teacherRatingStore(){try{return JSON.parse(localStorage.getItem("skorTeacherRatings")||"{}")}catch(e){return {}}}
function teacherRatingData(name){const store=teacherRatingStore();const r=store[name]||teacherRatingsDefault[name]||{sum:0,count:0};return {sum:Number(r.sum)||0,count:Number(r.count)||0}}
function teacherAverage(name){const r=teacherRatingData(name);return r.count?(r.sum/r.count):0}
function currentStudentRating(name){try{const store=JSON.parse(localStorage.getItem("skorMyTeacherRatings")||"{}");return Number(store[name]||0)}catch(e){return 0}}
function ratingStars(name,compact=false){const avg=teacherAverage(name);const selected=currentStudentRating(name);return `<div class="teacher-rating ${compact?'compact-rating':''}"><div class="teacher-rating-head"><div><span class="rating-label">Средняя оценка</span><b class="rating-number">${avg?avg.toFixed(1):'—'}</b><span class="rating-count">${teacherRatingData(name).count?` · ${teacherRatingData(name).count} оценок`:''}</span>${selected?`<small class="my-rating">Ваша оценка: ${selected} ★</small>`:''}</div><span class="stars-static" aria-label="${avg.toFixed(1)} из 5">${[1,2,3,4,5].map(i=>`<span class="star ${i<=Math.round(avg)?'filled':''}">★</span>`).join('')}</span></div>${compact?'':`<div class="rating-question">Оцените преподавателя</div><div class="star-picker" role="radiogroup" aria-label="Оценка преподавателя">${[1,2,3,4,5].map(i=>`<button type="button" class="star-button ${i<=selected?'selected':''}" onclick="rateTeacher('${name}',${i})" aria-label="${i} из 5">★</button>`).join('')}</div>`}</div>`}
function rateTeacher(name,stars){stars=Math.max(1,Math.min(5,Number(stars)||0));if(!stars)return;const store=teacherRatingStore();const old=currentStudentRating(name);const base=teacherRatingData(name);if(old){base.sum-=old;base.count=Math.max(0,base.count-1)}base.sum+=stars;base.count+=1;store[name]=base;localStorage.setItem("skorTeacherRatings",JSON.stringify(store));const mine=JSON.parse(localStorage.getItem("skorMyTeacherRatings")||"{}");mine[name]=stars;localStorage.setItem("skorMyTeacherRatings",JSON.stringify(mine));showToast(`Оценка ${stars} ★ сохранена`);refreshOpenRating();}
function refreshOpenRating(){if(window.currentLessonDay!==undefined&&window.currentLessonIndex!==undefined){const d=sDay; sDay=window.currentLessonDay; openStudentLesson(window.currentLessonIndex); sDay=d;}else if(window.currentSubjectIndex!==undefined)openSubjectReport(window.currentSubjectIndex);else if(window.currentCourseIndex!==undefined){const i=window.currentCourseIndex,c=courses[i];const lectures=["Курс лекций","Лекция 1","Лекция 2","Лекция 3","Лекция 4","Лекция 5"].slice(0,c[2]+1),practices=["Практическая работа 1","Практическая работа 2","Практическая работа 3","Практическая работа 4","Практические работы"].slice(0,c[3]);renderCourseContent(i,lectures,practices)}}
function renderTeacherRatingsPage(){const el=document.getElementById("tRatings");if(!el)return;el.innerHTML=`<div class="subpage-hero rating-page-hero"><div class="subpage-icon">★</div><div><span>Обратная связь</span><h1>Рейтинг преподавателей</h1><p>Средние оценки преподавателей по отзывам студентов</p></div></div><div class="rating-overview"><div><span>Средняя оценка</span><b id="teacherRatingsOverall">—</b><small>из 5 ★</small></div><div><span>Преподавателей</span><b>${teacherList.length}</b><small>в списке</small></div></div><div class="teacher-rating-table"><div class="teacher-rating-table-head"><b>Преподаватель</b><b>Средняя оценка</b></div><div id="teacherRatingsList"></div></div>`;renderTeacherRatings()}
function renderTeacherRatings(){const el=document.getElementById("teacherRatingsList");if(!el)return;el.innerHTML=teacherList.map((name,i)=>{const r=teacherRatingData(name),avg=teacherAverage(name);return `<div class="teacher-rating-row"><div class="teacher-rating-person"><div class="teacher-rating-avatar">${name.split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase()}</div><div><b>${name}</b><small>${i+1}. Преподаватель</small></div></div><div class="teacher-rating-score"><strong>${avg.toFixed(1)}</strong><span class="stars-static">${[1,2,3,4,5].map(x=>`<span class="star ${x<=Math.round(avg)?'filled':''}">★</span>`).join('')}</span><small>${r.count} оценок</small></div></div>`}).join('');const total=teacherList.reduce((a,name)=>{const r=teacherRatingData(name);return a+r.sum},0);const count=teacherList.reduce((a,name)=>a+teacherRatingData(name).count,0);const overall=count?total/count:0;const elAvg=document.getElementById('teacherRatingsOverall');if(elAvg)elAvg.textContent=overall.toFixed(1)}

function setRole(r){role=r;studentRole.classList.toggle("active",r==="student");teacherRole.classList.toggle("active",r==="teacher");adminRole.classList.toggle("active",r==="admin");studentFields.classList.toggle("hidden",r!=="student");teacherFields.classList.toggle("hidden",r!=="teacher");adminFields.classList.toggle("hidden",r!=="admin");demoHint.textContent=r==="student"?"Демо: ivanova.ab / 1234":r==="teacher"?"Демо: potapov / 4321":"Демо администратора: admin / admin123"}
function login(){
 if(role==="student"){
  if(studentLogin.value!=="ivanova.ab"||studentPassword.value!=="1234"){showToast("Неверный ID или пароль");return}
  loginPage.classList.add("hidden");studentApp.classList.remove("hidden");initStudent();
 }else if(role==="teacher"){
  if(teacherLogin.value!=="potapov"||teacherPassword.value!=="4321"){showToast("Неверный логин или пароль");return}
  loginPage.classList.add("hidden");teacherApp.classList.remove("hidden");initTeacher();
 }else{
  if(adminLogin.value!=="admin"||adminPassword.value!=="admin123"){showToast("Неверный логин или пароль администратора");return}
  loginPage.classList.add("hidden");adminApp.classList.remove("hidden");initAdmin();
 }
}
function logout(){studentApp.classList.add("hidden");teacherApp.classList.add("hidden");adminApp.classList.add("hidden");loginPage.classList.remove("hidden");}
function studentPage(id,btn){document.querySelectorAll("#studentApp .page").forEach(x=>x.classList.remove("active"));document.getElementById(id).classList.add("active");document.querySelectorAll("#studentApp .nav-item").forEach(x=>x.classList.remove("active"));btn.classList.add("active");window.scrollTo(0,0)}
function teacherPage(id,btn){document.querySelectorAll("#teacherApp .page").forEach(x=>x.classList.remove("active"));document.getElementById(id).classList.add("active");document.querySelectorAll("#teacherApp .nav-item").forEach(x=>x.classList.remove("active"));btn.classList.add("active");window.scrollTo(0,0);if(id==="tReport")renderTeacherGroups();if(id==="tRatings")renderTeacherRatingsPage()}
function strip(data,current,prefix){let short=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"];return data.map((d,i)=>`<button class="day-chip ${i===current?'active':''}" onclick="${prefix}(${i})">${short[i]}<b>${9+i}</b></button>`).join("")}
function timeSort(lessons){return lessons.sort((a,b)=>(a[0].match(/\d{2}:\d{2}/)||['99:99'])[0].localeCompare((b[0].match(/\d{2}:\d{2}/)||['99:99'])[0]))}
function renderStudent(){sDayStrip.innerHTML=strip(studentSchedule,sDay,"selectStudentDay");let d=studentSchedule[sDay];sDayName.textContent=d.name;sDayDate.textContent=d.date;let extra=stored("skorAdminLessons",[]).filter(x=>x.group===profileData("student").group&&x.day===d.name).map(x=>[x.time,x.subject,x.type,x.teacher,x.room,0]);window.currentStudentLessons=timeSort([...d.lessons,...extra]);sLessons.innerHTML=window.currentStudentLessons.length?window.currentStudentLessons.map((l,i)=>lessonHTML(l,i,"student")).join(""):'<div class="empty">На этот день занятий нет 🌿</div>'}
function lessonHTML(l,i,mode){return `<article class="lesson" onclick="${mode==="student"?`openStudentLesson(${i})`:`openAttendance(${i})`}"><div class="lesson-top"><div class="time ${i%3===1?'orange':''}">${l[0].replace("–","<br>")}</div><div class="lesson-content"><span class="type">${l[2]}</span><div class="lesson-title">${l[1]}</div><div class="meta">♙ ${l[3]}<br>⌖ Ауд. ${l[4]}</div></div><div class="points">+${l[5]}</div></div></article>`}
function selectStudentDay(i){sDay=i;renderStudent()}function changeStudentDay(x){sDay=(sDay+x+7)%7;renderStudent()}
function initStudent(){renderStudent();renderStudentReport();renderCourses();updateProfileCard("student",profileData("student"))}
function renderStudentReport(){studentSubjects.innerHTML=subjects.map((s,i)=>`<article class="subject-card" onclick="openSubjectReport(${i})"><div class="subject-head"><div class="subject-icon">${i%2?"◉":"△"}</div><div class="subject-name">${s[0]}<div class="subject-teacher">Преподаватель: ${s[1]}</div></div><b>›</b></div><div class="score-row"><div><span>Посещение</span><b>${s[2]}</b></div><div><span>Работа</span><b>${s[3]}</b></div><div><span>Итого</span><b>${s[4]}</b></div></div></article>`).join("")}
function openSubjectReport(i){
 const s=subjects[i];
 window.currentSubjectIndex=i;
 window.currentCourseIndex=undefined;
 const detail=document.getElementById("sReportDetail");
 detail.innerHTML=`<button class="detail-back" onclick="studentPage(\'sReport\',document.querySelectorAll(\'#studentApp .nav-item\')[1])">‹ Назад</button>
 <div class="subject-detail-hero"><div class="subject-detail-icon">${i%2?"◉":"△"}</div><div><div class="detail-eyebrow">5 СЕМЕСТР · 2026/2027</div><h1>${s[0]}</h1><p class="muted">Преподаватель: ${s[1]}</p><b class="subject-total">Итого за предмет · ${s[4]} баллов</b></div></div>
 <h2>Балльно-рейтинговая ведомость</h2>
 <div class="rating-table"><div class="rating-row rating-head"><span>Показатель</span><span>Практика</span><span>Лекции</span><span>Всего</span></div><div class="rating-row"><span>Посещение</span><b>${Math.max(0,s[2]-1)}</b><b>${Math.min(s[2],9)}</b><b>${s[2]}</b></div><div class="rating-row"><span>Работа</span><b>${Math.max(0,s[3]-1)}</b><b>${Math.min(s[3],8)}</b><b>${s[3]}</b></div><div class="rating-row rating-total"><span>Итого</span><b>${Math.max(0,s[2]+s[3]-2)}</b><b>${Math.min(s[2],9)+Math.min(s[3],8)}</b><b>${s[4]}</b></div></div>
 <h2>Правило начисления</h2><div class="rule-card">За каждую пару можно получить <b>2 балла</b>: 1 за посещение и 1 за работу. Был на занятии, но работу не сдал — <b>1 балл</b>. Не был — <b>0 баллов</b>.</div>`;
 studentPage("sReportDetail",document.querySelectorAll("#studentApp .nav-item")[1]);
}

function renderCourses(){
 const icons=["△","◉","▣","▤","□","≋"];
 studentCourses.innerHTML=courses.map((c,i)=>`<article class="course-card polished-course" onclick="openCourse(${i})">
   <div class="course-icon ${i%3===1?'orange':''}">${icons[i%icons.length]}</div>
   <div class="course-main"><div class="course-name">${c[0]}</div><div class="subject-teacher">Преподаватель: ${c[1]}</div>
   <div class="course-meta"><span>▤ ${c[2]} лек.</span><span>♙ ${c[3]} практ.</span></div></div><span class="course-arrow">›</span>
 </article>`).join("")
}
function openStudentLesson(i){let l=(window.currentStudentLessons||studentSchedule[sDay].lessons)[i];const teacherNames=splitTeachers(l[3]);window.currentLessonDay=sDay;window.currentLessonIndex=i;window.currentSubjectIndex=undefined;window.currentCourseIndex=undefined;sDetail.innerHTML=`<button class="detail-back" onclick="studentPage('sSchedule',document.querySelector('#studentApp .nav-item'))">‹ Назад</button><div class="detail-box"><div class="detail-title">${l[1]}</div><p class="muted">${l[2]} · ${l[0]}</p><p class="muted">${l[3]} · ауд. ${l[4]}</p><div class="score-row"><div><span>Посещение</span><b>${l[5]?1:0}/1</b></div><div><span>Работа</span><b>${l[5]===2?1:0}/1</b></div><div><span>Итого</span><b>${l[5]}/2</b></div></div>${teacherNames.map(t=>ratingStars(t).replace('teacher-rating','teacher-rating lesson-rating')).join('')}<button class="login-btn" onclick="openMaterials()">📎 Материалы занятия</button></div>`;studentPage("sDetail")}
function openMaterials(){sMaterials.innerHTML=`<button class="detail-back" onclick="studentPage('sDetail',document.querySelector('#studentApp .nav-item'))">‹ Назад</button><h1>Материалы занятия</h1><p class="muted">Закреплённые преподавателем материалы</p>${["Курс лекций","Лекция 1","Лекция 2","Практическая работа 1","Практическая работа 2"].map((x,i)=>`<div class="material" onclick="showToast('Открыт файл: ${x}.pdf')"><div class="material-icon">▣</div><div><b>${x}</b><small>PDF · закреплено</small></div><span>›</span></div>`).join("")}`;studentPage("sMaterials")}
let activeCourseTab=0;
function openCourse(i){
 let c=courses[i];
 let lectures=["Курс лекций","Лекция 1","Лекция 2","Лекция 3","Лекция 4","Лекция 5"].slice(0,c[2]+1);
 let practices=["Практическая работа 1","Практическая работа 2","Практическая работа 3","Практическая работа 4","Практическая работа 5","Практические работы"].slice(0,c[3]);
 activeCourseTab=0;
 window.currentCourseIndex=i;
 window.currentSubjectIndex=undefined;
 renderCourseContent(i,lectures,practices);
 studentPage("sDetail",document.querySelectorAll('#studentApp .nav-item')[2]);
}
function switchCourseTab(tab){
 activeCourseTab=tab;
 let i=window.currentCourseIndex;
 if(i===undefined) i=0;
 let c=courses[i];
 let lectures=["Курс лекций","Лекция 1","Лекция 2","Лекция 3","Лекция 4","Лекция 5"].slice(0,c[2]+1);
 let practices=["Практическая работа 1","Практическая работа 2","Практическая работа 3","Практическая работа 4","Практическая работа 5","Практические работы"].slice(0,c[3]);
 renderCourseContent(i,lectures,practices);
}
function renderCourseContent(i,lectures,practices){
 window.currentCourseIndex=i;
 let c=courses[i];
 let list=activeCourseTab===0?lectures:practices;
 let isLecture=activeCourseTab===0;
 sDetail.innerHTML=`
 <button class="detail-back" onclick="studentPage('sCourses',document.querySelectorAll('#studentApp .nav-item')[2])">‹ Назад к моим курсам</button>
 <div class="course-hero">
   <div class="course-hero-icon">△</div>
   <div><div class="course-code">5 СЕМЕСТР · 2026/2027</div><div class="course-detail-name">${c[0]}</div><p class="muted">Преподаватель: ${c[1].split(";").join(" / ")}</p></div>
 </div>
 <div class="course-tabs">
   <button class="${isLecture?'active':''}" onclick="switchCourseTab(0)">Лекции <b>${lectures.length}</b></button>
   <button class="${!isLecture?'active':''}" onclick="switchCourseTab(1)">Практики <b>${practices.length}</b></button>
 </div>
 <div class="course-material-card">
   <div class="course-section-heading">
     <span class="section-mark ${isLecture?'':'orange-mark'}">${isLecture?'Т':'П'}</span>
     <div><b>${isLecture?'Теоретический блок':'Практический блок'}</b><small>${isLecture?'Учебные материалы и лекции':'Практические и лабораторные работы'}</small></div>
   </div>
   ${list.length?list.map((x,k)=>`<div class="material polished-material" onclick="showToast('Открыт файл: ${x}.pdf')"><div class="material-icon ${isLecture?'':'orange-material'}">▣</div><div><b>${x}</b><small>${isLecture?(k===0?'Полный курс · PDF':'Лекция · PDF'):'Практика · PDF'} · закреплено преподавателем</small></div><span>›</span></div>`).join(''):`<div class="empty">${isLecture?'Лекций пока нет':'Практических работ пока нет'}</div>`}
 </div>`;
}

function renderTeacher(){tDayStrip.innerHTML=strip(teacherSchedule,tDay,"selectTeacherDay");let d=teacherSchedule[tDay];tDayName.textContent=d.name;tDayDate.textContent=d.date;let who=profileData("teacher").name.toLowerCase();let extra=stored("skorAdminLessons",[]).filter(x=>x.day===d.name&&x.teacher.toLowerCase()===who).map(x=>[x.time,x.subject,x.type,x.group,x.room,0]);window.currentTeacherLessons=timeSort([...d.lessons,...extra]);tLessons.innerHTML=window.currentTeacherLessons.length?window.currentTeacherLessons.map((l,i)=>lessonHTML(l,i,"teacher")).join(""):'<div class="empty">Занятий нет</div>'}
function selectTeacherDay(i){tDay=i;renderTeacher()}function changeTeacherDay(x){tDay=(tDay+x+7)%7;renderTeacher()}function initTeacher(){renderTeacher();renderTeacherGroups();updateProfileCard("teacher",profileData("teacher"))}
function renderTeacherGroups(){teacherGroups.innerHTML=["ИСИП-24-1","ИСИП-24-2","ИСИП-24-3","ИСИП-24-4","ИСИП-24-5","ИСИП-24-6"].map(g=>`<button onclick="openGroup('${g}')"><b>${g}</b><small>22–25 студентов</small></button>`).join("")}
function openAttendance(i){let l=(window.currentTeacherLessons||teacherSchedule[tDay].lessons)[i];attendance.innerHTML=`<button class="detail-back" onclick="teacherPage('tSchedule',document.querySelector('#teacherApp .nav-item'))">‹ Назад к расписанию</button><div class="attendance-head"><div><div class="attendance-title">${l[1]}</div><p class="muted">${l[2]} · ${l[3]} · ауд. ${l[4]}</p></div><button class="save-btn" onclick="saveAttendance()">Сохранить</button></div><div class="date-badge">📅 ${teacherSchedule[tDay].date} · Максимум за пару: 2 балла</div><div class="student-list"><div class="student-row header"><div class="student-num">№</div><div class="student-name">Ф.И.О. студента</div><div>Балл</div></div>${names.map((n,j)=>`<div class="student-row"><div class="student-num">${j+1}</div><div class="student-name">${n}</div><div><input class="points-input" type="number" min="0" max="2" value="${j%5===0?1:2}"></div></div>`).join("")}</div><p class="report-caption">0 — отсутствовал · 1 — был на занятии, но не показал работу · 2 — посещение + работа</p>`;teacherPage("attendance")}
function saveAttendance(){showToast("Баллы сохранены");}
function openGroup(g){document.getElementById("groupReport").innerHTML=`<button class="detail-back" onclick="document.getElementById('groupReport').innerHTML=''">‹ К списку групп</button>`+groupReportHTML(g);teacherPage("tReport",document.querySelectorAll("#teacherApp .nav-item")[1])}
function groupReportHTML(g){
 let grades=getGrades(g);
 return `<div class="report-caption"><b>Группа: ${g}</b><br>Баллы за занятия. Максимум за одно занятие — 2 балла.</div><div class="report-table-wrap"><table class="report-table editable-report"><tr><th>№</th><th>Ф.И.О.</th>${gradeDates.map(d=>`<th>${d}</th>`).join("")}<th class="att">Итого</th></tr>${names.map((n,i)=>`<tr><td>${i+1}</td><td class="name">${n}</td>${gradeDates.map((_,j)=>`<td><input class="report-points-input" type="number" min="0" max="2" step="1" value="${grades[i][j]}" data-group="${g}" data-student="${i}" data-date="${j}" oninput="updateReportTotal(this)"></td>`).join("")}<td class="att total" id="total-${g}-${i}">${grades[i].reduce((a,b)=>a+b,0)}</td></tr>`).join("")}</table></div><div class="report-actions"><button class="save-btn" onclick="saveGroupReport('${g}')">Сохранить баллы</button></div><p class="report-caption">0 — отсутствовал · 1 — только посещение · 2 — посещение + работа</p>`
}
function updateReportTotal(input){let g=input.dataset.group,i=+input.dataset.student,j=+input.dataset.date;let v=Math.max(0,Math.min(2,Number(input.value)||0));input.value=v;let grades=getGrades(g);grades[i][j]=v;document.getElementById(`total-${g}-${i}`).textContent=grades[i].reduce((a,b)=>a+b,0)}
function saveGroupReport(g){let inputs=document.querySelectorAll(`.report-points-input[data-group="${g}"]`);inputs.forEach(input=>{let i=+input.dataset.student,j=+input.dataset.date;getGrades(g)[i][j]=Math.max(0,Math.min(2,Number(input.value)||0));});showToast(`Баллы группы ${g} сохранены`)}

function openProfileTab(id){
 role="student";
 const pages=["sProfile","sNotifications","sSupport","sEditProfile","sAbout"];
 document.querySelectorAll("#studentApp .page").forEach(x=>x.classList.remove("active"));
 document.getElementById(id).classList.add("active");
 document.querySelectorAll("#studentApp .nav-item").forEach(x=>x.classList.remove("active"));
 document.querySelectorAll("#studentApp .nav-item")[3].classList.add("active");
 renderProfileTab(id,"student");window.scrollTo(0,0);
}
function openTeacherProfileTab(id){
 role="teacher";
 document.querySelectorAll("#teacherApp .page").forEach(x=>x.classList.remove("active"));
 document.getElementById(id).classList.add("active");
 document.querySelectorAll("#teacherApp .nav-item").forEach(x=>x.classList.remove("active"));
 document.querySelectorAll("#teacherApp .nav-item")[3].classList.add("active");
 renderProfileTab(id,"teacher");window.scrollTo(0,0);
}
function profileBack(roleName){if(roleName==="student") studentPage("sProfile",document.querySelectorAll("#studentApp .nav-item")[3]);else teacherPage("tProfile",document.querySelectorAll("#teacherApp .nav-item")[3]);}

const defaultProfiles={
 student:{name:"Иванова Алина Борисовна",login:"ivanova.ab",group:"ИСИП-24-5",email:"ivanova@skor.ru"},
 teacher:{name:"Михаил Анатольевич Потапов",login:"potapov",group:"Преподаватель",email:"potapov@skor.ru"}
};
function profileData(who){
 const key="skorProfile_"+who;
 try{return {...defaultProfiles[who],...(JSON.parse(localStorage.getItem(key)||"{}"))}}catch(e){return {...defaultProfiles[who]}}
}
function saveProfile(who){
 const prefix=who==="teacher"?"t":"s";
 const data={name:document.getElementById(prefix+"ProfileName").value.trim(),login:document.getElementById(prefix+"ProfileLogin").value.trim(),group:document.getElementById(prefix+"ProfileGroup").value.trim(),email:document.getElementById(prefix+"ProfileEmail").value.trim()};
 if(!data.name||!data.login||!data.email){showToast("Заполните обязательные поля");return}
 localStorage.setItem("skorProfile_"+who,JSON.stringify(data));
 updateProfileCard(who,data);showToast("Профиль сохранён");
}
function updateProfileCard(who,data){
 const root=document.getElementById(who==="student"?"studentApp":"teacherApp");
 const card=root.querySelector(who==="student"?"#sProfile .profile-card":"#tProfile .profile-card");
 if(card){
   const initials=data.name.split(/\s+/).slice(0,2).map(x=>x[0]).join("").toUpperCase();
   card.querySelector(".avatar").textContent=initials;
   card.querySelector("h2").textContent=data.name;
   card.querySelector(".muted").textContent=who==="student"?"Студентка · "+data.group:"Преподаватель";
   if(who==="student"){
     const groupStat=card.querySelector(".profile-stats > div:first-child b");
     if(groupStat) groupStat.textContent=data.group;
   }
 }
}
function renderProfileTab(id,who){
 const el=document.getElementById(id); const data=profileData(who); const teacher=who==="teacher";
 const back=`<button class="detail-back" onclick="profileBack('${who}')">‹ Назад в профиль</button>`;
 if(id.endsWith("Notifications")){
   el.innerHTML=back+`<div class="subpage-hero"><div class="subpage-icon">♧</div><div><span>Центр событий</span><h1>Уведомления</h1><p>Здесь появляются новости СКОР и важные события аккаунта</p></div><b class="hero-badge">3</b></div>
   <div class="notification-toolbar"><b>Последние события</b><button onclick="showToast('Все уведомления отмечены прочитанными')">Прочитать все</button></div>
   <div class="notice-card unread"><div class="notice-icon orange-icon">♧</div><div class="notice-content"><div class="notice-top"><b>Новый вход в систему</b><span>сейчас</span></div><p>Выполнен вход в аккаунт ${data.login}. Если это были не вы, обратитесь в поддержку.</p><div class="notice-tag">Безопасность аккаунта</div></div></div>
   <div class="notice-card"><div class="notice-icon">▣</div><div class="notice-content"><div class="notice-top"><b>Обновлены материалы курса</b><span>вчера</span></div><p>В курсе «Разработка мобильных приложений» появились новые материалы от преподавателя.</p><div class="notice-tag soft">Учебные материалы</div></div></div>
   <div class="notice-card"><div class="notice-icon">◷</div><div class="notice-content"><div class="notice-top"><b>Расписание обновлено</b><span>12 сент.</span></div><p>Проверьте актуальное расписание занятий. Изменения доступны в разделе «Расписание».</p><div class="notice-tag soft">Расписание</div></div></div>
   <div class="notice-card"><div class="notice-icon">★</div><div class="notice-content"><div class="notice-top"><b>Добро пожаловать в СКОР</b><span>10 сент.</span></div><p>Ваш электронный дневник готов. Следите за баллами, материалами и расписанием в одном месте.</p><div class="notice-tag soft">СКОР</div></div></div>`;
 } else if(id.endsWith("Ratings")){
   el.innerHTML=back+`<div class="subpage-hero rating-page-hero"><div class="subpage-icon">★</div><div><span>Обратная связь</span><h1>Рейтинг преподавателей</h1><p>Средние оценки преподавателей по отзывам студентов</p></div></div>
   <div class="rating-overview"><div><span>Средняя оценка</span><b id="teacherRatingsOverall">—</b><small>из 5 ★</small></div><div><span>Преподавателей</span><b>${teacherList.length}</b><small>в списке</small></div></div>
   <div class="teacher-rating-table"><div class="teacher-rating-table-head"><b>Преподаватель</b><b>Средняя оценка</b></div><div id="teacherRatingsList"></div></div>`;
   renderTeacherRatings();
 } else if(id.endsWith("Support")){
   el.innerHTML=back+`<div class="subpage-hero support-hero"><div class="subpage-icon">?</div><div><span>Помощь пользователям</span><h1>Поддержка</h1><p>Ответим на вопросы по СКОР и вашему аккаунту</p></div><div class="online-dot">● онлайн</div></div>
   <div class="support-top"><div><b>Чат поддержки</b><small>Обычно отвечаем в течение нескольких минут</small></div><span>09:00–18:00</span></div>
   <div class="chat-box"><div class="chat-date">Сегодня</div><div id="supportMessages"></div></div>
   <div class="quick-help"><span>Быстрый вопрос</span><button type="button" data-support-fill="Не отображается оценка за занятие" onclick="fillSupportMessage(this)">Баллы</button><button type="button" data-support-fill="Не вижу нужный материал" onclick="fillSupportMessage(this)">Материалы</button><button type="button" data-support-fill="У меня не открывается расписание" onclick="fillSupportMessage(this)">Расписание</button></div>
   <div class="chat-input"><input id="supportInput" placeholder="Напишите сообщение..."><button onclick="sendSupportMessage(this)">➤</button></div>`;renderUserSupportThread();
 } else if(id.endsWith("EditProfile")){
   const initials=data.name.split(/\s+/).slice(0,2).map(x=>x[0]).join("").toUpperCase();
   el.innerHTML=back+`<div class="subpage-hero edit-hero"><div class="edit-avatar">${initials}</div><div><span>Личные данные</span><h1>Редактировать профиль</h1><p>Обновите информацию, которая отображается в вашем профиле</p></div></div>
   <div class="edit-card"><div class="card-heading"><div><b>Основная информация</b><small>Эти данные можно изменить в любое время</small></div><span>✎</span></div>
   <label>Фамилия и имя</label><div class="field-wrap"><span>А</span><input id="${teacher?'t':'s'}ProfileName" value="${data.name}"></div>
   <label>Логин / ID</label><div class="field-wrap"><span>@</span><input id="${teacher?'t':'s'}ProfileLogin" value="${data.login}"></div>
   <label>Группа</label><div class="field-wrap"><span>⌂</span><input id="${teacher?'t':'s'}ProfileGroup" value="${data.group}" ${teacher?'disabled':''}></div>
   <label>Электронная почта</label><div class="field-wrap"><span>✉</span><input id="${teacher?'t':'s'}ProfileEmail" type="email" value="${data.email}"></div>
   <div class="edit-note">Изменения сохраняются локально в этом прототипе и остаются после повторного открытия страницы.</div>
   <button class="login-btn save-profile-btn" onclick="saveProfile('${who}')">Сохранить изменения</button></div>
   <div class="security-card"><div class="security-icon">✓</div><div><b>Профиль защищён</b><p>Не передавайте пароль другим людям. СКОР не запрашивает пароль в сообщениях поддержки.</p></div></div>`;
 } else {
   el.innerHTML=back+`<div class="about-hero"><div class="about-mark">СКОР</div><div><span>Электронный дневник</span><h1>О приложении</h1><p>Учёба, расписание и баллы — в одном месте.</p></div></div>
   <div class="about-card"><div class="about-intro"><div class="mini-logo">СК</div><div><b>СКОР — электронный дневник</b><p>Приложение создано для удобной работы студентов и преподавателей с учебным процессом.</p></div></div>
   <div class="about-grid"><div><span>Версия</span><b>1.0.0</b></div><div><span>Семестр</span><b>5 · 2026/2027</b></div><div><span>Балльная система</span><b>0–2 за пару</b></div><div><span>Платформа</span><b>Web / Mobile</b></div></div>
   <div class="feature-list"><div><span>◷</span><div><b>Расписание</b><small>Актуальные пары с аудиторией и типом занятия.</small></div></div><div><span>★</span><div><b>Баллы</b><small>1 балл за посещение и 1 за выполненную работу.</small></div></div><div><span>▣</span><div><b>Курсы</b><small>Лекции и практические материалы по каждому предмету.</small></div></div></div>
   <div class="about-note">СКОР — учебный прототип интерфейса электронного дневника. Данные в текущей версии демонстрационные.</div></div>`;
 }
}
function supportSection(target){
 if(target&&target.closest){const found=target.closest('#sSupport, #tSupport');if(found)return found;}
 const teacherSupport=document.getElementById('tSupport');
 const studentSupport=document.getElementById('sSupport');
 if(teacherSupport&&teacherSupport.classList.contains('active'))return teacherSupport;
 if(studentSupport&&studentSupport.classList.contains('active'))return studentSupport;
 return role==='teacher'?teacherSupport:studentSupport;
}
function currentSupportRole(section){
 const el=section||supportSection();
 return el&&el.id==='tSupport'?'teacher':'student';
}
function supportIdentity(section){
 const who=currentSupportRole(section),d=profileData(who);
 return `${who}:${d.login||d.name}`;
}
function fillSupport(text, section){
 const scope=section||supportSection();
 const input=scope&&scope.querySelector('#supportInput');
 if(input){input.value=text;input.dispatchEvent(new Event('input',{bubbles:true}));input.focus();}
}
function fillSupportMessage(button){
 if(!button)return;
 const section=supportSection(button);
 fillSupport(button.getAttribute('data-support-fill')||'',section);
}
function sendSupportMessage(button){
 const section=supportSection(button);
 const input=section&&section.querySelector('#supportInput');
 if(!input){showToast('Поле сообщения не найдено');return}
 const text=input.value.trim();
 if(!text){showToast('Введите сообщение');input.focus();return}
 const who=currentSupportRole(section),d=profileData(who),key=supportIdentity(section);
 const chats=stored('skorSupportConversations',{});
 const thread=chats[key]||(chats[key]={user:d.name,role:who,messages:[]});
 thread.user=d.name;thread.role=who;thread.messages=thread.messages||[];
 thread.messages.push({from:'user',text,date:new Date().toLocaleString('ru-RU'),timestamp:Date.now()});
 persist('skorSupportConversations',chats);
 input.value='';
 renderUserSupportThread(section);
 const box=section.querySelector('#supportMessages');
 if(box)box.scrollTop=box.scrollHeight;
 showToast('Сообщение отправлено');
}
function renderUserSupportThread(section){
 const scope=section||supportSection();
 const box=scope&&scope.querySelector('#supportMessages');
 if(!box)return;
 const chats=stored('skorSupportConversations',{}),thread=chats[supportIdentity(scope)];
 box.innerHTML=(thread?.messages||[]).map(m=>`<div class="chat-message ${m.from==='admin'?'support':'user'}"><div><b>${m.from==='admin'?'Администратор':'Вы'}</b><p>${escapeChat(m.text)}</p><small>${m.date||''}</small></div></div>`).join('')||'<p class="muted support-empty">Напишите нам — сообщение появится здесь.</p>';
}
function escapeChat(x){return String(x||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

function showToast(t){let x=document.getElementById("toast");x.textContent=t;x.classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>x.classList.remove("show"),1700)}


/* Added modules: student record books, teacher grade access and administrator tools. */
function stored(key, fallback){try{return JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback))}catch(e){return fallback}}
function persist(key,value){localStorage.setItem(key,JSON.stringify(value))}
function openStudentRecordbook(){
 const el=document.getElementById('sRecordbook');const saved=stored('skorStudentRecords',{})[profileData('student').name]||stored('skorRecordbook',{});el.innerHTML=`<button class="detail-back" onclick="studentPage('sProfile',document.querySelectorAll('#studentApp .nav-item')[3])">‹ Назад в профиль</button><div class="recordbook-hero"><div class="recordbook-icon">🎓</div><div><span>СКОР · УСПЕВАЕМОСТЬ</span><h1>Зачётная книжка</h1><p>${profileData('student').name} · ${profileData('student').group}</p></div></div><div class="report-summary"><div><span>Предметов</span><b>${subjects.length}</b></div><div><span>Средний балл</span><b>${calcStudentAverage(saved).toFixed(2)}</b></div></div><div class="recordbook-list">${subjects.map((sub,i)=>{let v=saved[i]||{};return `<article class="recordbook-subject"><b>${sub[0]}</b><small>Преподаватель: ${sub[1]}</small><div class="recordbook-grades"><span>Экзамен / зачёт</span><strong>${v.grade||'—'}</strong></div><div class="recordbook-grades"><span>Дата</span><span>${v.date||'Не выставлено'}</span></div></article>`}).join('')}</div>`;
 studentPage('sRecordbook',document.querySelectorAll('#studentApp .nav-item')[3]);
}
function calcStudentAverage(data){let vals=Object.values(data).map(x=>Number(x.grade)).filter(x=>x>0);return vals.length?vals.reduce((a,b)=>a+b,0)/vals.length:0}
function openTeacherRecords(){renderTeacherRecords();teacherPage('tStudentRecords',document.querySelectorAll('#teacherApp .nav-item')[3]);}
function renderTeacherRecords(){let el=document.getElementById('tStudentRecords');let records=stored('skorRecordbook',{});el.innerHTML=`<button class="detail-back" onclick="teacherPage('tProfile',document.querySelectorAll('#teacherApp .nav-item')[3])">‹ Назад в профиль</button><h1>Зачётные книжки</h1><p class="muted">Выберите студента и внесите оценки по предметам</p><div class="admin-card"><label>Студент</label><select id="recordStudent">${names.map((n,i)=>`<option value="${i}">${n}</option>`).join('')}</select><label>Предмет</label><select id="recordSubject">${subjects.map((sub,i)=>`<option value="${i}">${sub[0]}</option>`).join('')}</select><label>Оценка (2–5 или зачёт)</label><input id="recordGrade" type="text" placeholder="5, 4, 3, 2 или зачёт"><label>Дата</label><input id="recordDate" type="date"><button class="login-btn" onclick="saveTeacherRecord()">Сохранить оценку</button></div><div id="teacherRecordTable"></div>`;renderTeacherRecordTable()}
function saveTeacherRecord(){let si=+document.getElementById('recordStudent').value,sub=+document.getElementById('recordSubject').value,grade=document.getElementById('recordGrade').value.trim(),date=document.getElementById('recordDate').value;if(!grade){showToast('Введите оценку');return}let all=stored('skorStudentRecords',{}),key=names[si],student=all[key]||{};student[sub]={grade,date:date||new Date().toISOString().slice(0,10)};all[key]=student;persist('skorStudentRecords',all);if(key===profileData('student').name)persist('skorRecordbook',student);showToast('Оценка сохранена');renderTeacherRecordTable()}
function renderTeacherRecordTable(){let el=document.getElementById('teacherRecordTable');if(!el)return;let all=stored('skorStudentRecords',{}),key=names[+(document.getElementById('recordStudent')?.value||0)],rec=all[key]||{};el.innerHTML=`<h2>${key}</h2><div class="recordbook-list">${subjects.map((sub,i)=>{let r=rec[i]||{};return `<article class="recordbook-subject"><b>${sub[0]}</b><small>${sub[1]}</small><div class="recordbook-grades"><span>Оценка</span><strong>${r.grade||'—'}</strong></div><div class="recordbook-grades"><span>Дата</span><span>${r.date||'—'}</span></div></article>`}).join('')}</div>`;document.getElementById('recordStudent')?.addEventListener('change',renderTeacherRecordTable)}
function adminPage(id,btn){document.querySelectorAll('#adminApp .page').forEach(x=>x.classList.remove('active'));document.getElementById(id).classList.add('active');document.querySelectorAll('#adminApp .nav-item').forEach(x=>x.classList.remove('active'));if(btn)btn.classList.add('active');if(id==='aSchedule')renderAdminSchedule();if(id==='aUsers')renderAdminUsers();if(id==='aNews')renderAdminNews();if(id==='aSupport')renderAdminSupport();window.scrollTo(0,0)}
function initAdmin(){adminPage('aDashboard',document.querySelector('#adminApp .nav-item'));}
function adminLessons(){return stored('skorAdminLessons',[])}
function saveAdminLesson(){let v={group:adminGroup.value,day:adminDay.value,time:adminTime.value.trim(),subject:adminSubject.value.trim(),type:adminType.value,teacher:adminTeacher.value.trim(),room:adminRoom.value.trim()};if(!v.time||!v.subject||!v.teacher||!v.room){showToast('Заполните все поля занятия');return}let a=adminLessons();a.push(v);persist('skorAdminLessons',a);['adminTime','adminSubject','adminTeacher','adminRoom'].forEach(id=>document.getElementById(id).value='');renderAdminSchedule();showToast('Занятие добавлено в расписание')}
function renderAdminSchedule(){let el=document.getElementById('adminScheduleList');if(!el)return;let a=adminLessons();el.innerHTML='<h2>Добавленные занятия</h2>'+ (a.length?a.map((x,i)=>`<div class="admin-card"><b>${x.group} · ${x.day}</b><p>${x.time} — ${x.subject}</p><small>${x.type} · ${x.teacher} · ауд. ${x.room}</small><button class="wide-outline" onclick="deleteAdminLesson(${i})">Удалить</button></div>`).join(''):'<div class="empty">Пока нет добавленных занятий</div>')}
function deleteAdminLesson(i){let a=adminLessons();a.splice(i,1);persist('skorAdminLessons',a);renderAdminSchedule();showToast('Занятие удалено')}
function saveAdminUser(){let u={type:userType.value,name:userName.value.trim(),login:userLogin.value.trim(),group:userGroup.value.trim(),password:userPassword.value};if(!u.name||!u.login){showToast('Укажите ФИО и логин');return}let a=stored('skorAdminUsers',[]),i=a.findIndex(x=>x.login===u.login);if(i>=0)a[i]=u;else a.push(u);persist('skorAdminUsers',a);renderAdminUsers();showToast('Данные пользователя сохранены')}
function renderAdminUsers(){let el=document.getElementById('adminUsersList');if(!el)return;let a=stored('skorAdminUsers',[]);el.innerHTML='<h2>Список пользователей</h2>'+(a.length?a.map((u,i)=>`<div class="admin-card"><b>${u.name}</b><p>${u.type} · ${u.login}</p><small>${u.group}</small><button class="wide-outline" onclick="deleteAdminUser(${i})">Удалить пользователя</button></div>`).join(''):'<div class="empty">Добавленные администратором пользователи появятся здесь</div>')}
function deleteAdminUser(i){let a=stored('skorAdminUsers',[]);a.splice(i,1);persist('skorAdminUsers',a);renderAdminUsers()}
function publishAdminNews(){let title=newsTitle.value.trim(),body=newsText.value.trim();if(!title||!body){showToast('Заполните заголовок и текст новости');return}let a=stored('skorAdminNews',[]);a.unshift({title,body,date:new Date().toLocaleDateString('ru-RU')});persist('skorAdminNews',a);newsTitle.value='';newsText.value='';renderAdminNews();showToast('Новость опубликована')}
function renderAdminNews(){let el=document.getElementById('adminNewsList');if(!el)return;let a=stored('skorAdminNews',[]);el.innerHTML='<h2>Опубликованные новости</h2>'+(a.length?a.map((n,i)=>`<div class="admin-card"><b>${n.title}</b><small>${n.date}</small><p>${n.body}</p><button class="wide-outline" onclick="deleteAdminNews(${i})">Удалить</button></div>`).join(''):'<div class="empty">Новостей пока нет</div>')}
function deleteAdminNews(i){let a=stored('skorAdminNews',[]);a.splice(i,1);persist('skorAdminNews',a);renderAdminNews()}
let activeSupportConversation='';
function renderAdminSupport(){
 const el=document.getElementById('adminSupportList'),layout=document.getElementById('adminMessengerLayout');
 if(!el)return;
 const chats=stored('skorSupportConversations',{}),keys=Object.keys(chats).sort((a,b)=>{
  const aa=(chats[a].messages||[]),bb=(chats[b].messages||[]);
  return (bb[bb.length-1]?.timestamp||0)-(aa[aa.length-1]?.timestamp||0);
 });
 el.innerHTML=keys.length?keys.map(k=>{
  const ms=chats[k].messages||[],last=ms[ms.length-1],initials=(chats[k].user||'?').split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase();
  return `<button type="button" class="wa-contact ${k===activeSupportConversation?'active':''}" onclick="openAdminConversation('${encodeURIComponent(k)}')"><span class="wa-avatar">${escapeChat(initials)}</span><span class="wa-contact-copy"><b>${escapeChat(chats[k].user||'Пользователь')}</b><small>${chats[k].role==='teacher'?'Преподаватель':'Студент'} · ${last?escapeChat(last.text):'Нет сообщений'}</small></span><i>${ms.length}</i></button>`;
 }).join(''):'<p class="muted">Пока нет обращений. Новые сообщения студентов и преподавателей появятся здесь.</p>';
 if(layout)layout.classList.toggle('messenger-open',!!(activeSupportConversation&&chats[activeSupportConversation]));
 if(activeSupportConversation&&chats[activeSupportConversation])renderAdminConversation();
 else {const thread=document.getElementById('adminThread');if(thread)thread.innerHTML='<p class="muted">Выберите пользователя, чтобы открыть переписку</p>';}
}
function backToAdminChats(){activeSupportConversation='';renderAdminSupport();}

function openAdminConversation(encoded){activeSupportConversation=decodeURIComponent(encoded);renderAdminSupport();renderAdminConversation()}
function renderAdminConversation(){let box=document.getElementById('adminThread'),chats=stored('skorSupportConversations',{}),thread=chats[activeSupportConversation];if(!box||!thread)return;box.innerHTML=`<b>${escapeChat(thread.user)}</b><div class="chat-date">Личный диалог</div>`+(thread.messages||[]).map(m=>`<div class="chat-message ${m.from==='admin'?'support':'user'}"><div><b>${m.from==='admin'?'Администратор':escapeChat(thread.user)}</b><p>${escapeChat(m.text)}</p><small>${m.date||''}</small></div></div>`).join('')}
function replyAdminSupport(){let input=document.getElementById('adminReply'),text=input.value.trim();if(!text){showToast('Введите сообщение');return}if(!activeSupportConversation){showToast('Сначала выберите пользователя');return}let chats=stored('skorSupportConversations',{}),thread=chats[activeSupportConversation];if(!thread)return;thread.messages.push({from:'admin',text,date:new Date().toLocaleString('ru-RU'),timestamp:Date.now()});persist('skorSupportConversations',chats);input.value='';renderAdminSupport();renderAdminConversation();showToast('Сообщение отправлено выбранному пользователю')}



window.addEventListener('storage',function(e){if(e.key==='skorSupportConversations'){if(document.getElementById('aSupport')?.classList.contains('active'))renderAdminSupport();if(document.getElementById('supportMessages'))renderUserSupportThread();}});
document.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey&&document.activeElement?.id==='supportInput'){e.preventDefault();sendSupportMessage();}if(e.key==='Enter'&&!e.shiftKey&&document.activeElement?.id==='adminReply'){e.preventDefault();replyAdminSupport();}});
setInterval(function(){if(document.getElementById('aSupport')?.classList.contains('active'))renderAdminSupport();if(document.getElementById('supportMessages'))renderUserSupportThread();},2000);

document.addEventListener('click',function(e){
 const btn=e.target.closest('[data-support-fill]');
 if(btn){e.preventDefault();e.stopPropagation();fillSupportMessage(btn);return;}
 const send=e.target.closest('#teacherApp #tSupport .chat-input button, #studentApp #sSupport .chat-input button');
 if(send){e.preventDefault();sendSupportMessage();}
});
