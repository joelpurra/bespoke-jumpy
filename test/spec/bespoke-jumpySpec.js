/*global document:true, jasmine:true, bespoke:true, describe:true, it:true, expect:true, beforeEach:true */

Function.prototype.bind = Function.prototype.bind || require("function-bind");

var bespoke = require("bespoke"),
    classes = require("bespoke-classes"),
    jumpy = require("../../lib-instrumented/bespoke-jumpy.js");

(function(document, jasmine, bespoke, describe, it, expect, beforeEach) {
    "use strict";

    describe("bespoke-jumpy", function() {

        var deck,

            createDeck = function() {
                var parent = document.createElement("article");
                for (var i = 0; i < 10; i++) {
                    parent.appendChild(document.createElement("section"));
                }

                deck = bespoke.from(parent, [
                    classes(),
                    jumpy()
                ]);
            },

            expectToBeActive = function(index) {
                expect(deck.slides[index].classList.contains("bespoke-active")).toBe(true);
            },

            expectToBeInactive = function(index) {
                expect(deck.slides[index].classList.contains("bespoke-inactive")).toBe(true);
            };

        beforeEach(createDeck);

        describe("deck.firstIndex", function() {
            it("should always return 0", function() {
                expect(deck.firstIndex()).toBe(0);
            });
        });

        describe("deck.lastIndex", function() {
            it("should return the index of the last slide", function() {
                expect(deck.lastIndex()).toBe(9);
            });
        });

        describe("deck.first", function() {
            beforeEach(function() {
                deck.slide(5);
            });

            it("should go to first slide", function() {
                expectToBeInactive(0);
                expectToBeActive(5);
                deck.first();
                expectToBeInactive(5);
                expectToBeActive(0);
            });

            it("should fire first event", function() {
                var eventListener = jasmine.createSpy("eventListener"),
                    off = deck.on("jumpy.first", eventListener);
                deck.first();
                off();
                expect(eventListener).toHaveBeenCalled();
            });
        });

        describe("deck.last", function() {
            beforeEach(function() {
                deck.slide(5);
            });

            it("should go to last slide", function() {
                expectToBeInactive(9);
                expectToBeActive(5);
                deck.last();
                expectToBeInactive(5);
                expectToBeActive(9);
            });

            it("should fire last event", function() {
                var eventListener = jasmine.createSpy("eventListener"),
                    off = deck.on("jumpy.last", eventListener);
                deck.last();
                off();
                expect(eventListener).toHaveBeenCalled();
            });
        });
    });
}(document, jasmine, bespoke, describe, it, expect, beforeEach));
