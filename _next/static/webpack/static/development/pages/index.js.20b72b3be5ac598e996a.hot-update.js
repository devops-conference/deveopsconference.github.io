webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/config */ "./node_modules/next-server/dist/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../components/section */ "./components/section.js");
/* harmony import */ var _components_mini_section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../components/mini-section */ "./components/mini-section.js");
/* harmony import */ var _components_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../components/calendar */ "./components/calendar.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../components/header */ "./components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../components/footer */ "./components/footer.js");
/* harmony import */ var _components_animated_text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../components/animated-text */ "./components/animated-text.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../utils/config */ "./utils/config.js");





var _jsxFileName = "/home/local/CONDUCTOR/magno.santos/source-codes/site/pages/index.js";












var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_7___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var BACKEND_URL = publicRuntimeConfig.BACKEND_URL;

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    //title={<img className="logo" src={`${BACKEND_URL}${site.logo}`} />}
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, _utils_config__WEBPACK_IMPORTED_MODULE_15__["default"].title)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_section__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: "logo",
          src: "".concat(BACKEND_URL).concat(_utils_config__WEBPACK_IMPORTED_MODULE_15__["default"].logo),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }),
        backgroundImage: "url('".concat(BACKEND_URL, "/static/img/section-background/black.jpg')"),
        backdrop: true,
        alignCenter: true,
        firstSection: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_calendar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        dateStartEvent: _utils_config__WEBPACK_IMPORTED_MODULE_15__["default"].dateEventStart,
        dateFinishEvent: _utils_config__WEBPACK_IMPORTED_MODULE_15__["default"].dateEventFinish,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "button large",
        href: "#inscription",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Inscreva-se")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_section__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: _utils_config__WEBPACK_IMPORTED_MODULE_15__["default"].about.title,
        alignCenter: true,
        firstSection: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "DevOps \xE9 um dos conceitos mais discutidos do momento e trata-se de uma cultura que nasceu como um conjunto de pr\xE1ticas para integra\xE7\xE3o entre as equipes de desenvolvimento de softwares, opera\xE7\xF5es (infraestrutura ou sysadmin) e de apoio envolvidas (como controle de qualidade) e a ado\xE7\xE3o de processos automatizados para produ\xE7\xE3o r\xE1pida e segura de aplica\xE7\xF5es e servi\xE7os. Venha conhecer nesta confer\xEAncia diversas ferramentas, casos de sucesso e dicas pr\xE1ticas de como DevOps pode lhe ajudar e ser aplicado na sua carreira e empresa.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_section__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Palestrantes",
        backgroundImage: "url('".concat(BACKEND_URL, "/static/img/section-background/dark-background.png')"),
        backdrop: true,
        alignCenter: true,
        firstSection: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Cont\xE9udo com os palestrantes")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_mini_section__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Programa\xE7\xE3o",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, _utils_config__WEBPACK_IMPORTED_MODULE_15__["default"].programacao.map(function (p) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, "".concat(p.horario, " - ").concat(p.nome));
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_section__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Patrocinadores",
        backgroundImage: "url('".concat(BACKEND_URL, "/static/img/section-background/dark-background.png')"),
        backdrop: true,
        alignCenter: true,
        firstSection: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_mini_section__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Inscri\xE7\xF5es",
        id: "inscription",
        alignCenter: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "As inscri\xE7\xF5es est\xE3o dispon\xEDveis no per\xEDodo de 17/06/2019 a 17/08/2019"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "\xC9 necess\xE1rio um 1kg de alimento para ter acesso ao evento que ser\xE1 doado!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "button large",
        href: "https://www.sympla.com.br/devops-conference__554372",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Link de inscri\xE7\xE3o"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_mini_section__WEBPACK_IMPORTED_MODULE_10__["default"], {
        alignCenter: true,
        backgroundImage: "url('".concat(BACKEND_URL, "/static/img/section-background/dark-background.png')"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_8___default.a, {
        animateIn: "pulse",
        duration: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "".concat(BACKEND_URL, "/static/img/icons/instagram_white.png"),
        alt: "instagram",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_8___default.a, {
        animateIn: "pulse",
        duration: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "".concat(BACKEND_URL, "/static/img/icons/facebook_white.png"),
        alt: "facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_8___default.a, {
        animateIn: "pulse",
        duration: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "".concat(BACKEND_URL, "/static/img/icons/twitter-white.png"),
        alt: "twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "follow-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://www.instagram.com/".concat(_utils_config__WEBPACK_IMPORTED_MODULE_15__["default"].hashTag),
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_animated_text__WEBPACK_IMPORTED_MODULE_14__["default"], {
        text: '@' + _utils_config__WEBPACK_IMPORTED_MODULE_15__["default"].hashTag,
        className: "text-styled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), " ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_mini_section__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "maps",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("iframe", {
        src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15835.896147127442!2d-34.87990134556883!3d-7.128999696264386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1629016d1091cb1!2sCentro+Cultural+Ariano+Suassuna!5e0!3m2!1spt-BR!2sbr!4v1560875453071!5m2!1spt-BR!2sbr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "".concat(BACKEND_URL, "/static/img/f.jpg"),
        alt: "ariano suassuna",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.20b72b3be5ac598e996a.hot-update.js.map