!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n=function(){function t(t,e){this.suit=e,this.value=t}return t.prototype.getSuit=function(){return this.suit},t.prototype.getValue=function(){return this.value},t.prototype.getCardValue=function(){return[this.value,this.suit]},t}(),i=function(){function t(t,e){var r=this;void 0===t&&(t=[]),void 0===e&&(e=[]),this.cards=[],this.suits=t,this.values=e,this.suits.forEach((function(t){r.values.forEach((function(e){r.addCard(new n(e,t))}))}))}return t.prototype.getCards=function(){return this.cards},t.prototype.addCard=function(t){this.cards.push(t)},t.prototype.dealTopCard=function(){var t=this.cards.shift();if(void 0===t)throw new Error("No cards left in the Deck");return t},t.prototype.getCardValues=function(){var t=[];return this.getCards().forEach((function(e){t.push(e.getCardValue())})),t},t.prototype.shuffle=function(){for(var t=[],e=0;e<this.cards.length;e++){var r=Math.floor(Math.random()*(e+1));t[e]=t[r],t[r]=this.cards[e]}this.cards=t},t}(),o=function(){function t(){}return t.build=function(t,e){return new i(t,e)},t}().build(["♤","♡","♧","♢"],["2","3","4","5","6","7","8","9","10","J","Q","K","A"]),s=function(t,e){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function a(t,e){function r(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var u,p=function(){function t(t,e){this.cards=[],this.cards.push(t),this.cards.push(e)}return t.prototype.addCard=function(t){this.cards.push(t)},t.prototype.getCards=function(){return this.cards},t.prototype.getFirstCard=function(){return this.cards[0]},t.prototype.getHandValue=function(){return this.cards.map((function(t){return t.getCardValue().join("")})).join(", ")},t.prototype.getHandValues=function(){return this.cards.map((function(t){return t.getValue()}))},t}(),d=function(){function t(){this.bust=!1,this.playing=!0}return t.prototype.double=function(t){this.hit(t),this.playing=!1},t.prototype.getHand=function(){if(void 0===this.hand)throw new Error("Hand must be defined!");return this.hand},t.prototype.hit=function(t){if(void 0===this.hand)throw new Error("Hand must be defined!");this.hand.addCard(t)},t.prototype.isBust=function(){return this.bust},t.prototype.isPlaying=function(){return this.playing},t.prototype.receiveHand=function(t){this.hand=t},t.prototype.reset=function(){this.bust=!1,this.playing=!0},t.prototype.setBust=function(t){this.bust=t},t.prototype.setPlaying=function(t){this.playing=t},t.prototype.stand=function(){this.setPlaying(!1)},t}(),h=function(t){function e(e){var r=t.call(this)||this;return e.shuffle(),r.deck=e,r}return a(e,t),e.prototype.dealCard=function(){return this.deck.dealTopCard()},e.prototype.dealHands=function(){return[new p(this.deck.dealTopCard(),this.deck.dealTopCard()),new p(this.deck.dealTopCard(),this.deck.dealTopCard())]},e.prototype.getCardUp=function(){if(void 0===this.getHand())throw new Error("dealerHand isn't defined yet");return this.getHand().getFirstCard().getCardValue().join("")},e.prototype.getDeck=function(){return this.deck},e}(d);!function(t){t[t.LOSS=0]="LOSS",t[t.PUSH=1]="PUSH",t[t.WIN=2]="WIN"}(u||(u={}));var c=u,f=function(){function t(t,e){this.ante=0,this.dealer=e,this.user=t}return t.prototype.deal=function(){var t=this.dealer.dealHands(),e=t[0],r=t[1];this.dealer.receiveHand(e),this.user.receiveHand(r)},t.prototype.doubleUser=function(){this.user.double(this.dealer.dealCard()),this.user.wager(this.ante),this.ante=2*this.ante},t.prototype.evaluateDealer=function(){return this.evaluateHand(this.dealer.getHand().getHandValues(),this.dealer)},t.prototype.evaluateUser=function(){return this.evaluateHand(this.user.getHand().getHandValues(),this.user)},t.prototype.getAnte=function(){return this.ante},t.prototype.getDealerCardUp=function(){return this.dealer.getCardUp()},t.prototype.getDealerHandValue=function(){return this.dealer.getHand().getHandValue()},t.prototype.getUserChips=function(){return this.user.getChips()},t.prototype.getUserHandValue=function(){return this.user.getHand().getHandValue()},t.prototype.hitDealer=function(){this.dealer.hit(this.dealer.dealCard())},t.prototype.hitUser=function(){this.user.hit(this.dealer.dealCard())},t.prototype.isDealerBust=function(){return this.dealer.isBust()},t.prototype.isDealerPlaying=function(){return this.dealer.isPlaying()},t.prototype.isUserBust=function(){return this.user.isBust()},t.prototype.isUserPlaying=function(){return this.user.isPlaying()},t.prototype.outcome=function(){return this.isDealerBust()&&!this.isUserBust()?c.WIN:this.evaluateUser()<this.evaluateDealer()||this.isUserBust()?c.LOSS:this.evaluateUser()===this.evaluateDealer()?c.PUSH:c.WIN},t.prototype.pushHand=function(){this.user.receiveChips(this.ante),this.resetAnte()},t.prototype.receiveAnte=function(t){this.user.wager(t),this.ante+=t},t.prototype.resetAnte=function(){this.ante=0},t.prototype.resetPlayers=function(){this.user.reset(),this.dealer.reset()},t.prototype.settleDealerHand=function(){for(;this.evaluateDealer()<17;)this.hitDealer();this.standDealer()},t.prototype.standDealer=function(){this.dealer.stand()},t.prototype.standUser=function(){this.user.stand()},t.prototype.userWin=function(){var t=2*this.ante;this.user.receiveChips(t),this.resetAnte()},t.prototype.getUserHand=function(){return this.user.getHand()},t.prototype.getDealerHand=function(){return this.dealer.getHand()},t.prototype.evaluateHand=function(e,r){var n=0;if(e.forEach((function(t){n+="A"===t?11:"J"===t||"Q"===t||"K"===t?10:Number(t)})),n>t.BLACKJACK&&e.includes("A")){var i=e.indexOf("A");return e[i]="1",this.evaluateHand(e,r)}return n>t.BLACKJACK&&r.setBust(!0),n},t.BLACKJACK=21,t}(),l=function(t){function e(e){void 0===e&&(e=200);var r=t.call(this)||this;return r.chips=e,r}return a(e,t),e.prototype.getChips=function(){return this.chips},e.prototype.receiveChips=function(t){this.chips+=t},e.prototype.wager=function(t){if(t>this.chips)throw new Error("Can't wager more chips than are available!");this.chips-=t},e}(d);new f(new l,new h(o));alert("it works!");e.default=()=>{alert("it works!")}}]);