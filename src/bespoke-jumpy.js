/*global document:true, bespoke:true */

(function(document, bespoke, convenient, ns, pluginName, undefined) {
    "use strict";

    var cv = convenient.builder(pluginName),

        KeyConstants = {
            // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Virtual_key_codes
            END: 0x23, // (35) End key.
            HOME: 0x24, // (36) Home key.
            // 0: 0x30, // (48) "0" key in standard key location.
            // 1: 0x31, // (49) "1" key in standard key location.
            // 2: 0x32, // (50) "2" key in standard key location.
            // 3: 0x33, // (51) "3" key in standard key location.
            // 4: 0x34, // (52) "4" key in standard key location.
            // 5: 0x35, // (53) "5" key in standard key location.
            // 6: 0x36, // (54) "6" key in standard key location.
            // 7: 0x37, // (55) "7" key in standard key location.
            // 8: 0x38, // (56) "8" key in standard key location.
            // 9: 0x39, // (57) "9" key in standard key location.
            // NUMPAD0: 0x60, // (96) "0" on the numeric keypad.
            // NUMPAD1: 0x61, // (97) "1" on the numeric keypad.
            // NUMPAD2: 0x62, // (98) "2" on the numeric keypad.
            // NUMPAD3: 0x63, // (99) "3" on the numeric keypad.
            // NUMPAD4: 0x64, // (100)  "4" on the numeric keypad.
            // NUMPAD5: 0x65, // (101)  "5" on the numeric keypad.
            // NUMPAD6: 0x66, // (102)  "6" on the numeric keypad.
            // NUMPAD7: 0x67, // (103)  "7" on the numeric keypad.
            // NUMPAD8: 0x68, // (104)  "8" on the numeric keypad.
            // NUMPAD9: 0x69 // (105)  "9" on the numeric keypad.
        },

        getDigit = function(which) {
            var result = which;

            while (result > 0x9) {
                result -= 0x30;
            }

            return result;
        },

        isDigitKey = function(which) {
            var result = (which >= 0x30 && which <= 0x39) || (which >= 0x60 && which <= 0x69);

            return result;
        },

        unboundDeckMethods = {
            // Plugin functions expect to be executed in a deck context
            firstIndex: function() {
                var index = 0;

                return index;
            },

            lastIndex: function() {
                var index = Math.max(0, this.slides.length - 1);

                return index;
            },

            first: function(customData) {
                var index = this.firstIndex(),
                    result = cv.fire(this, "first", null, index, customData) && this.slide(index, customData);

                return result;
            },

            last: function(customData) {
                var index = this.lastIndex(),
                    result = cv.fire(this, "last", null, index, customData) && this.slide(index, customData);

                return result;
            }
        },

        plugin = function(deck) {
            var publicDeckMethods = ["firstIndex", "lastIndex", "first", "last"],

                original = {},

                registerDeckExtensions = function() {
                    // Bind fire to the deck instance, so it doesn't have to be passed all the time.
                    // Works in the browser, but doesn't pass jasmine tests.
                    // Could be another problem with phantom-polyfill.js.
                    // TODO: re-test bound fire in the future.
                    //original.fire = cv.fire;
                    //cv.fire = cv.fire.bind(cv, deck);

                    publicDeckMethods.forEach(function(methodName) {
                        original[methodName] = deck[methodName];
                        deck[methodName] = unboundDeckMethods[methodName].bind(deck);
                    });
                },

                keyDownListener = function(e) {
                    var eventHandled = false,
                        digit,
                        index;

                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
                        return false;
                    }

                    eventHandled = eventHandled || (e.which === KeyConstants.END && cv.fire(deck, "end", e) && !deck.last());
                    eventHandled = eventHandled || (e.which === KeyConstants.HOME && cv.fire(deck, "home", e) && !deck.first());

                    if (isDigitKey(e.which)) {
                        // TODO: support multi-digit slide numbers with a timeout
                        digit = getDigit(e.which);
                        index = (digit - 1 + 10) % 10;
                        eventHandled = eventHandled || (cv.fire(deck, "jump", e, index) && !deck.slide(index));
                    }

                    if (eventHandled) {
                        e.preventDefault();
                    }

                    return !eventHandled;
                },

                enable = function() {
                    document.addEventListener("keydown", keyDownListener, false);
                },

                init = function() {
                    registerDeckExtensions();
                    enable();
                };

            init();
        };

    if (ns[pluginName] !== undefined) {
        throw cv.generateErrorObject("The " + pluginName + " plugin has already been loaded.");
    }

    ns[pluginName] = plugin;
}(document, bespoke, bespoke.plugins.convenient, bespoke.plugins, "jumpy"));
