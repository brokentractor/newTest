webpackJsonp([1],{163:function(e,t,i){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=i(1),c=i.n(a),s=i(62),l=i(426),d=i(64),u=i(160),p=i(427),f=i(101),h=function(e){function t(i){o(this,t);var r=n(this,e.call(this,i));return r.url=window.location.href,r.$reviewLink=c()('[data-reveal-id="modal-review-form"]'),r}return r(t,e),t.prototype.before=function(e){var t=this;c()(document).on("close.fndtn.reveal",function(){-1!==t.url.indexOf("#write_review")&&"function"==typeof window.history.replaceState&&window.history.replaceState(null,document.title,window.location.pathname)}),e()},t.prototype.loaded=function(e){var t=this,i=void 0;Object(d.b)(),this.productDetails=new u.a(c()(".productView"),this.context,window.BCData.product_attributes),Object(p.a)();var o=Object(f.b)(".writeReview-form"),n=new l.a(o);c()("body").on("click",'[data-reveal-id="modal-review-form"]',function(){i=n.registerValidation(t.context)}),o.on("submit",function(){return!!i&&(i.performCheck(),i.areAll("valid"))});var r=c()(".productView-info-value.FitsModel").text(),a=c()(".productView-info-value.ProductDim").text(),s=c()(".productView-info-value.CorePrice").text(),h=c()(".price.price--withoutTax").text();if("$0.00"==h)c()(".price.price--withoutTax").html("Call for Pricing"),c()("#pv-detbtm form").remove();else if(s>0){console.log(h),h=h.replace("$",""),h=h.replace(",",""),h=parseFloat(h).toFixed(2),s=parseFloat(s).toFixed(2);var v=+h-+s;v=parseFloat(v).toFixed(2),v=v.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),c()(".price.price--withoutTax").html("$"+v),c()(".productView-price").append('<div class="corecharge">Core Charge: $'+s+"</div>")}c()("#fittext").text(r),c()("#partdim-text").text(a),e()},t.prototype.after=function(e){this.productReviewHandler(),e()},t.prototype.productReviewHandler=function(){-1!==this.url.indexOf("#write_review")&&this.$reviewLink.click()},t}(s.a);t.default=h},426:function(e,t,i){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=i(1),r=i.n(n),a=i(63),c=i(64),s=i(157),l=function(){function e(t){o(this,e),this.validator=Object(a.a)({submit:t.find('input[type="submit"]')}),this.$reviewsContent=r()("#product-reviews"),this.$collapsible=r()("[data-collapsible]",this.$reviewsContent),this.initLinkBind(),this.injectPaginationLink(),this.collapseReviews()}return e.prototype.initLinkBind=function(){var e=this,t=r()("#productReviews-content",this.$reviewsContent);r()(".productView-reviewLink").click(function(){t.hasClass("is-open")||e.$collapsible.trigger(c.a.click)})},e.prototype.collapseReviews=function(){window.location.hash&&0===window.location.hash.indexOf("#product-reviews")||this.$collapsible.trigger(c.a.click)},e.prototype.injectPaginationLink=function(){var e=r()(".pagination-item--next .pagination-link",this.$reviewsContent),t=r()(".pagination-item--previous .pagination-link",this.$reviewsContent);e.length&&e.attr("href",e.attr("href")+" #product-reviews"),t.length&&t.attr("href",t.attr("href")+" #product-reviews")},e.prototype.registerValidation=function(e){return this.context=e,this.validator.add([{selector:'[name="revrating"]',validate:"presence",errorMessage:this.context.reviewRating},{selector:'[name="revtitle"]',validate:"min-length:2",errorMessage:this.context.reviewSubject},{selector:'[name="revtext"]',validate:"min-length:2",errorMessage:this.context.reviewComment},{selector:'[name="email"]',validate:function(e,t){e(s.a.email(t))},errorMessage:this.context.reviewEmail}]),this.validator},e.prototype.validate=function(){return this.validator.performCheck()},e}();t.a=l},427:function(e,t,i){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){a()("[data-video-gallery]").each(function(e,t){var i=a()(t);i.data("video-gallery")instanceof c||i.data("video-gallery",new c(i))})}t.a=n;var r=i(1),a=i.n(r),c=function(){function e(t){o(this,e),this.$player=t.find("[data-video-player]"),this.$videos=t.find("[data-video-item]"),this.currentVideo={},this.bindEvents()}return e.prototype.selectNewVideo=function(e){e.preventDefault();var t=a()(e.currentTarget);this.currentVideo={id:t.data("video-id"),$selectedThumb:t},this.setMainVideo(),this.setActiveThumb()},e.prototype.setMainVideo=function(){this.$player.attr("src","//www.youtube.com/embed/"+this.currentVideo.id)},e.prototype.setActiveThumb=function(){this.$videos.removeClass("is-active"),this.currentVideo.$selectedThumb.addClass("is-active")},e.prototype.bindEvents=function(){this.$videos.on("click",this.selectNewVideo.bind(this))},e}()}});
