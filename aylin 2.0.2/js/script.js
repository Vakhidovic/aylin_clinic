const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");

burger.addEventListener("click",
	function () {
		burger.classList.toggle("active");
		menu.classList.toggle("active")
	});



let sliderIndex = 1;
let timeout;
const layers = [...document.querySelectorAll('.layer')];
const covers = [...document.querySelectorAll('.photo-frame')];

function changeCoverAnimState(state = 0) {
	const st = state === 1 ? 'running' : 'paused';
	covers.forEach(cover => {
		// cover.style['animation-play-state'] = st;
		cover.querySelector('.cover').style.width = `${state * 100}%`;
	});
}

function switchLayer(step = 1) {
	const nextSlide = (sliderIndex + step) % 5 === 0 ? 5 : (sliderIndex + step) % 5;

	changeCoverAnimState(1);
	clearTimeout(timeout);
	timeout = setTimeout(() => {
		changeCoverAnimState(0)
	}, 500);

	for(let i of layers) {
		i.classList.remove('layer-displayed');
		i.classList.remove('layer-displayed-exit');
		if(i.dataset.scene == nextSlide) {
			i.classList.add('layer-displayed');
		}
		if(i.dataset.scene == sliderIndex) {
			i.classList.add('layer-displayed-exit');
		}
	}
	sliderIndex = nextSlide;
}



function Laser(){
	document.querySelector(".paragraf").innerHTML =`
	<p class="paragraf2">
    MeDioStar Monolith – это аппарат для лазерной эпиляция 6-го (последнего) поколения, выпускается
                            на
                            заводе Asclepion в Йене (Германия). По функциональным возможностям и техническим характеристикам
                            представляет собой эволюционное развитие применяющегося во многих профессиональных медицинских
                            центрах лазера. Основными преимуществами для Monolith стали: <br> <br>
                            • Сниженное время импульса до 3 мс и увеличенная максимально возможная выходная мощность вспышки
                            лазера, что делает его самым эффективным лазером из всех существующих на рынке аналогов –
                            особенно
                            разница будет заметна на светлых и тонких волосах. <br><br>
                            • Совершенно новые манипулы в линейке Monolith с размером площади пятна вспышки
                            лазера до 10 см2, охлаждающим контуром по всему периметру и возможностью
                            генерации
                            до 20 вспышек в секунду с сохраненной эксклюзивной технологией двойного импульса
                            разной длины волны. Все это делает этот MeDioStar Monolith самым быстрым,
                            комфортным
                            и безопасным лазером для эпиляции и ряда других косметологических процедур. <br><br>
                            • Множество дополнительных функций для медицинского персонала, позволяющих
                            проводить
                            процедуру максимально эффективно, снижая до минимума риски человеческого
                            фактора.
                            Клиника красоты и здоровья Aylin предлагает вам самую передовую лазерную
                            эпиляцию –
                            первый MeDioStar Monolith в Узбекистане. <br><br>
                            Приходя в Aylin, вы можете быть уверены, что процедура будет проведена с
                            применением
                            самых современных и эффективных лазеров, прошедших своевременный технический
                            контроль официального дистрибьютора лазеров Asclepion в России компаний – ООО
                            «ЛАЗЕР
                            МЕД СИСТЕМС». Благодаря такому сотрудничеству, мы получаем новейшее оборудование
                            напрямую с завода в Германии. Аппарат сертифицирован в Узбекистане. По РУз лазер
                            единственный.
                        </p>
                       
`;

document.querySelector(".buttons").innerHTML = `
                       <div class="buttons">
                         <div onclick="Close1()" class="btn-5 ">
                          Закрыть
                         </div>
                       </div>
`

}

function Close1(){
	document.querySelector(".paragraf").innerHTML = `
	<p class="paragraf">MeDioStar Monolith – это аппарат для лазерной эпиляция 6-го (последнего) поколения, выпускается
	на
	заводе Asclepion в Йене (Германия). По функциональным возможностям и техническим характеристикам
	представляет собой эволюционное развитие применяющегося во многих профессиональных медицинских
	центрах лазера. Основными преимуществами для Monolith стали: <br> <br>
	• Сниженное время импульса до 3 мс и увеличенная максимально возможная выходная мощность вспышки
	лазера, что делает его самым эффективным лазером из всех существующих на рынке аналогов –
	особенно
	разница будет заметна на светлых и тонких волосах. <br><br>
	• Совершенно новые манипулы в линейке Monolith с размером площади пятна вспышки
	лазера до 10 см2, охлаждающим контуром по всему периметру и возможностью
	генерации

</p>
	
	`


	document.querySelector(".buttons").innerHTML = `
	<div onclick="Laser()" class="btn-4 ">
	Подробнее...
	</div>
`
}