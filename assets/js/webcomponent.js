/**
 * --------------------------------------------------------------------------
 * @title: Adobe Creative Design Component
 * @author: Subrahmanyam Poluru
 * @email: subbu.uiux@gmail.com
 * @filename: webcomponent.js (Originally - creative.design.min.js)
 * @description: HTML5 Web Component API for Adobe Creative Design Theme
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const MODEL = [{
	title: 'Adjust Color',
	description: 'Adjust an objects color and saturation',
	mainImg: 'adjust-color-banner.png',
	hoverImg: 'adjust-color-banner-animated.gif'
}, {
	title: 'Adjust Lighting',
	description: 'Edit an images brightness and contrast',
	mainImg: 'adjust-lighting-banner.png',
	hoverImg: 'adjust-lighting-banner-animated.gif'
}, {
	title: 'Blur',
	description: 'Make elements look more distant, softer, or less distracting',
	mainImg: 'blur-banner.png',
	hoverImg: 'blur-banner-animated.gif'
}, {
	title: 'Enhance Details',
	description: 'Sharpen details and remove haze from a photo to make it look more clear',
	mainImg: 'enhance-details-banner.png',
	hoverImg: 'enhance-details-banner-animated.gif'
}];

const Util = {
	IMG_PATH: 'assets/images/',
	ICONS_PATH: 'assets/icons/',
	COMPONENT_NAME: 'creative-design',
	STYLE: 'style'
};

const EVENT = {
	MOUSEOVER: 'mouseover',
	MOUSEOUT: 'mouseout'
}

const CLASSNAMES = {
	IMG_GALLERY: 'creative-design',
	TOOLBAR: 'img-toolbar',
	IMG_HOVER: 'img-hover'
}

const SELECTOR = {
  TPL_CLASS   : '.creative-design',
  SHADOW_CLASS : '.img-hover'
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

 class CreativeDesign extends HTMLElement {
    constructor() {
      super();
      const template = document.querySelector(SELECTOR.TPL_CLASS);
      const templateContent = template.content;
      const style = document.createElement(Util.STYLE);
      style.textContent = this.cascadeStyles;
      template.innerHTML = this.fetchImages;
      this._shadowRoot = this.attachShadow({mode: 'open'})
	  this._shadowRoot.appendChild(templateContent.cloneNode(true));
	  this._shadowRoot.appendChild(style);
	  const items = this._shadowRoot.querySelectorAll(SELECTOR.SHADOW_CLASS);
	    for (const item of items) {
	      item.addEventListener(EVENT.MOUSEOVER, function(e) {
	        let getSrcVal = e.target.getAttribute("src");
	        e.target.setAttribute("src", e.target.getAttribute("data-src"));
	        e.target.setAttribute("data-src", getSrcVal);
	      });
	      item.addEventListener(EVENT.MOUSEOUT, function(e) {
	        let getSrcVal = e.target.getAttribute("src");
	        e.target.setAttribute("src", e.target.getAttribute("data-src"));
	        e.target.setAttribute("data-src", getSrcVal);
	      });
	    }
    }

/**
 * ------------------------------------------------------------------------
 * Getter : Fetch Images
 * ------------------------------------------------------------------------
 */

    get fetchImages() {
      return MODEL.map(item => `
              <div class="${CLASSNAMES.IMG_GALLERY}">
              	<figure>
                <img src="${Util.IMG_PATH}${item.mainImg}" data-src="${Util.IMG_PATH}${item.hoverImg}" class="${CLASSNAMES.IMG_HOVER}" alt="${item.title}">
                <figcaption>
				  	<h3>${item.title}</h3>
				  	<p>${item.description}</p>
				  </figcaption>
				  <div class="${CLASSNAMES.TOOLBAR}">
					    <ul>
						    <li><a href="#"><img src="${Util.ICONS_PATH}add.svg" alt="Add Effects" title="Add Effects"></a></li>
	                        <li><a href="#"><img src="${Util.ICONS_PATH}favorite.svg" alt="Add Faviorite" title="Add Faviorite"></a></li>
	                        <li><a href="#"><img src="${Util.ICONS_PATH}remove.svg" alt="Remove Faviorite" title="Remove Faviorite"></a></li>
					    </ul>
					  </div>
                  </figure> 
              </div>
              
        `).join('')
    }

/**
 * ------------------------------------------------------------------------
 * Getter : Internal Styles to Component
 * ------------------------------------------------------------------------
 */

    get cascadeStyles(){
    	return `
    	.creative-design img {
    		cursor: pointer;
    		display:block; 
    		height: auto;
    		max-width: 100%; 
			width: 100%;
    	}
        .creative-design figure{
			margin: 10px 0;
			position: relative;
		}
		.creative-design figcaption {
			bottom: -15px;
		    color: #fff;
		    display: block;
		    position: absolute;
		    padding: 10px 10px;
		}
		.creative-design figcaption h3 {
			font-weight: normal;
			margin: 0;
			padding: 0;
		}
		.creative-design figcaption p {
			line-height: 18px;
		}
		.img-toolbar {
		  max-height: 40px;
		  opacity: 0;
		  position: absolute;
		  top: 25px;
		  right: 5px;
		  transition: .5s ease;
		  transform: translate(-50%, -50%);
		  -ms-transform: translate(-50%, -50%);
		}
		
		.creative-design:hover .img-toolbar {
		  background: #000;
		  opacity: 1;
		}
		.creative-design figure .img-toolbar ul{
			list-style: none;
			margin:0;
			padding: 0;
		}
		.creative-design figure .img-toolbar ul li{
			float: left;
			padding: 10px 10px;
		}
		.creative-design figure .img-toolbar ul li a {
			display: block;
		}
		.creative-design figure .img-toolbar ul li a img {
			height: 20px;
			width: 20px;
		}
		.creative-design figure .img-toolbar ul li a:hover {
			color: #fff;
		}
      `;
    }
 }



/**
 * ------------------------------------------------------------------------
 * Define Web Component Name - Loading
 * ------------------------------------------------------------------------
 */

customElements.define(Util.COMPONENT_NAME, CreativeDesign);