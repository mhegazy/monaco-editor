/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-typescript version: 2.0.1(af49dcc8946eccfb3a0e9faefc5d4abd68d80d0e)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-typescript/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/language/typescript/lib/lib-ts",[],function(){return{contents:'/*! *****************************************************************************\nCopyright (c) Microsoft Corporation. All rights reserved. \nLicensed under the Apache License, Version 2.0 (the "License"); you may not use\nthis file except in compliance with the License. You may obtain a copy of the\nLicense at http://www.apache.org/licenses/LICENSE-2.0  \n \nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, \nMERCHANTABLITY OR NON-INFRINGEMENT. \n \nSee the Apache Version 2.0 License for specific language governing permissions\nand limitations under the License.\n***************************************************************************** */\n\n\n\n/// <reference no-default-lib="true"/>\n\n\n/// <reference lib="es5" />\n/// <reference lib="dom" />\n/// <reference lib="webworker.importscripts" />\n/// <reference lib="scripthost" />\n'}}),define("vs/language/typescript/lib/lib-es6-ts",[],function(){return{contents:'/*! *****************************************************************************\nCopyright (c) Microsoft Corporation. All rights reserved. \nLicensed under the Apache License, Version 2.0 (the "License"); you may not use\nthis file except in compliance with the License. You may obtain a copy of the\nLicense at http://www.apache.org/licenses/LICENSE-2.0  \n \nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, \nMERCHANTABLITY OR NON-INFRINGEMENT. \n \nSee the Apache Version 2.0 License for specific language governing permissions\nand limitations under the License.\n***************************************************************************** */\n\n\n\n/// <reference no-default-lib="true"/>\n\n\n/// <reference lib="es2015" />\n/// <reference lib="dom" />\n/// <reference lib="dom.iterable" />\n/// <reference lib="webworker.importscripts" />\n/// <reference lib="scripthost" />\n'}}),define("vs/language/typescript/src/worker",["require","exports","../lib/typescriptServices","../lib/lib-ts","../lib/lib-es6-ts"],function(e,t,n,i,r){"use strict";function o(e,t){return new u(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var s=monaco.Promise,c={NAME:"defaultLib:lib.d.ts",CONTENTS:i.contents},a={NAME:"defaultLib:lib.es6.d.ts",CONTENTS:r.contents},u=function(){function e(e,t){this._extraLibs=Object.create(null),this._languageService=n.createLanguageService(this),this._ctx=e,this._compilerOptions=t.compilerOptions,this._extraLibs=t.extraLibs}return e.prototype.getCompilationSettings=function(){return this._compilerOptions},e.prototype.getScriptFileNames=function(){var e=this._ctx.getMirrorModels().map(function(e){return e.uri.toString()});return e.concat(Object.keys(this._extraLibs))},e.prototype._getModel=function(e){for(var t=this._ctx.getMirrorModels(),n=0;n<t.length;n++)if(t[n].uri.toString()===e)return t[n];return null},e.prototype.getScriptVersion=function(e){var t=this._getModel(e);return t?t.version.toString():this.isDefaultLibFileName(e)||e in this._extraLibs?"1":void 0},e.prototype.getScriptSnapshot=function(e){var t,n=this._getModel(e);if(n)t=n.getValue();else if(e in this._extraLibs)t=this._extraLibs[e];else if(e===c.NAME)t=c.CONTENTS;else{if(e!==a.NAME)return;t=a.CONTENTS}return{getText:function(e,n){return t.substring(e,n)},getLength:function(){return t.length},getChangeRange:function(){}}},e.prototype.getCurrentDirectory=function(){return""},e.prototype.getDefaultLibFileName=function(e){return e.target>n.ScriptTarget.ES5?c.NAME:a.NAME},e.prototype.isDefaultLibFileName=function(e){return e===this.getDefaultLibFileName(this._compilerOptions)},e.prototype.getSyntacticDiagnostics=function(e){var t=this._languageService.getSyntacticDiagnostics(e);return t.forEach(function(e){return e.file=void 0}),s.as(t)},e.prototype.getSemanticDiagnostics=function(e){var t=this._languageService.getSemanticDiagnostics(e);return t.forEach(function(e){return e.file=void 0}),s.as(t)},e.prototype.getCompilerOptionsDiagnostics=function(e){var t=this._languageService.getCompilerOptionsDiagnostics();return t.forEach(function(e){return e.file=void 0}),s.as(t)},e.prototype.getCompletionsAtPosition=function(e,t){return s.as(this._languageService.getCompletionsAtPosition(e,t))},e.prototype.getCompletionEntryDetails=function(e,t,n){return s.as(this._languageService.getCompletionEntryDetails(e,t,n))},e.prototype.getSignatureHelpItems=function(e,t){return s.as(this._languageService.getSignatureHelpItems(e,t))},e.prototype.getQuickInfoAtPosition=function(e,t){return s.as(this._languageService.getQuickInfoAtPosition(e,t))},e.prototype.getOccurrencesAtPosition=function(e,t){return s.as(this._languageService.getOccurrencesAtPosition(e,t))},e.prototype.getDefinitionAtPosition=function(e,t){return s.as(this._languageService.getDefinitionAtPosition(e,t))},e.prototype.getReferencesAtPosition=function(e,t){return s.as(this._languageService.getReferencesAtPosition(e,t))},e.prototype.getNavigationBarItems=function(e){return s.as(this._languageService.getNavigationBarItems(e))},e.prototype.getFormattingEditsForDocument=function(e,t){return s.as(this._languageService.getFormattingEditsForDocument(e,t))},e.prototype.getFormattingEditsForRange=function(e,t,n,i){return s.as(this._languageService.getFormattingEditsForRange(e,t,n,i))},e.prototype.getFormattingEditsAfterKeystroke=function(e,t,n,i){return s.as(this._languageService.getFormattingEditsAfterKeystroke(e,t,n,i))},e.prototype.getEmitOutput=function(e){return s.as(this._languageService.getEmitOutput(e))},e}();t.TypeScriptWorker=u,t.create=o});