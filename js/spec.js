$(document).ready(function() {

  describe("Functions and callbacks", function() {
    it("returns the modulus", function() {
      expect(modulus(15, 4)).toEqual(3);
    });

    it("should add two numbers", function() {
      expect(doMath(3, 4, add)).toEqual(7);
    });

    it("should subtract two numbers", function() {
      expect(doMath(3, 4, subtract)).toEqual(-1);
    });

  });

  describe("Array methods", function() {
    it("reverses planets", function() {
      var match = ["yrucreM", "suneV", "htraE", "sraM", "retipuJ", "nrutaS", "sunarU", "enutpeN"];
      expect(reversedPlanets()).toEqual(match);
    });

    it("returns long planets", function() {
      var match = ["Mercury", "Jupiter", "Neptune"];
      expect(longPlanets()).toEqual(match);
    });

    it("returns sorted planets", function() {
      var match = ["Earth", "Jupiter", "Mars", "Mercury", "Neptune", "Saturn", "Uranus", "Venus"];
      expect(sortedPlanets()).toEqual(match);
    });
  });

  describe("Content creation", function() {
    var vanilla = document.getElementById("vanilla_output");
    var jq = document.getElementById("jquery_output");

    it("it should output vanilla content", function() {
      expect(vanilla.innerHTML).toBe("This content generated with vanilla JavaScript");
    });
    
    it("it should output jQuery content", function() {
      expect(jq.innerHTML).toBe("This content generated with jQuery");
    });
    
  });

  describe("AJAX", function() {
    it("should define getAnimals", function() {
      expect(getAnimals).toBeDefined();
    });    
  });

  describe("IIFE", function() {

    it("it exists", function() {
      expect(FruitMaker).not.toBe(undefined);
    });

    it("exposes slices", function() {
      expect(FruitMaker.slices).toBeDefined();
    });

    it("slices fruit", function() {
      expect(FruitMaker.slices("apples", 2)).toEqual(["apples","apples"]);
    });

    it("have a private fruits variable", function() {
      expect(FruitMaker.fruits).toBe(undefined);
    });

    it("it returns all fruits", function() {
      expect(FruitMaker.getFruits()).toEqual(["apples", "bananas", "cherries", "huckleberries"]);
    });

    it("it should add fruits", function() {
      expect(FruitMaker.addFruit("tomatoes")).toEqual(["apples", "bananas", "cherries", "huckleberries", "tomatoes"]);
    });

  });

});