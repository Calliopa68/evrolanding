	$('.info__slider').slick({
		speed: 500,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		dots: false,
		arrows: false,
		autoplay:true
	});
let bg = document.querySelector('.mouse-parallax-bg');
let elem1 = document.querySelector('.main__img_2');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 10 + 'px, -' + x * 10 + 'px)';
    elem1.style.transform = 'translate(+' + x * 10 + 'px, -' + x * 10 + 'px)';
});

/* Please, don't do shit-code  */
Element.prototype.closest || (Element.prototype.closest = function(t) { for (var e = this; e;) { if (e.matches(t)) return e;e = e.parentElement } return null });

Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

Object.assign || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: function(e) { "use strict"; if (null == e) throw new TypeError("Cannot convert first argument to object"); for (var t = Object(e), n = 1; n < arguments.length; n++) { var o = arguments[n]; if (null != o) for (var a = Object.keys(Object(o)), c = 0, b = a.length; c < b; c++) { var i = a[c], l = Object.getOwnPropertyDescriptor(o, i); void 0 !== l && l.enumerable && (t[i] = o[i]) } } return t } });

window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);

function $$(e, o, t) { "function" != typeof o ? o = o || document : (t = o, o = document); var c = o.querySelectorAll(e); return c = Array.prototype.slice.call(o.querySelectorAll(e)), "function" == typeof t && c.forEach(function(e, o, c) { t(e, o, c) }), c }

function addCss(r, s) { var a = function(r) { Object.assign(r.style, s) }; if (Array.isArray(r))
        for (var n = r.length - 1; n >= 0; n--) a(r[n]);
    else a(r) }

function getElementIndex(e) { for (var n = 0; e = e.previousElementSibling;) n++; return n }

function h_el(r) { return !!(Array.isArray(r) && r.length > 0) }

function debugging() { [].forEach.call($$("*"), function(n) { n.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16) }) }

$$('.main__btn')[0].addEventListener('animationend', (e) => {
	$$('#canvas')[0].classList.add('her');
})

function openPopup(popupClass){
	if( !h_el($$('.popups__popup.'+popupClass)) ){
		return false;
	}
	$$('body')[0].classList.add('modal_open');
	$$('.popups__popup.'+popupClass)[0].classList.add('active')
	return true;
}
function closePopup(btn){
	if(!btn.closest('.popups__popup')){
		return false;
	}
	$$('body')[0].classList.remove('modal_open');
	btn.closest('.popups__popup').classList.remove('active')
	return true;
}

$$('.open_popup',function(el){
	el.addEventListener('click',function(e){
		if( openPopup(this.dataset.popup) ) e.preventDefault();
	})
});
$$('.popups__close',function(el){
	el.addEventListener('click',function(e){
		if( closePopup(this) ) e.preventDefault();
	})
});

(function($){
    $(window).on("load",function(){
    $(".js-scrollbar").mCustomScrollbar({
      axis: "y",
      scrollInertia: 0,
      scrollButtons: { enable: false },
      mouseWheel: { enable: true }
    });
    });
  })(jQuery);