"use client";
import React, { useState } from "react";

export default function CustomiseProducts({
  productId,
  variants,
  productOptions,
}) {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (option, choice) => {
    setSelectedOptions((prev) => ({ ...prev, [option]: choice }));
  };
  console.log(variants);

  // const isVariantInStock = (choices) => {
  //   return variants.some((variant) => {
  //     const variantChoices = variant.choices;
  //     if (!variantChoices) return false;

  //     return (
  //       Object.entries(choices).every(
  //         ([key, value]) => variantChoices[key] === value
  //       ) &&
  //       variant.stock?.inStock &&
  //       variant.stock?.quantity &&
  //       variant.stock?.quantity > 0
  //     );
  //   });
  // };
  const isVariantInStock = (choices) => {
    console.log("Checking stock for choices:", choices);
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      const allChoicesMatch = Object.entries(choices).every(
        ([key, value]) => variantChoices[key] === value
      );

      const inStock =
        allChoicesMatch &&
        variant.stock?.inStock &&
        variant.stock?.quantity > 0;
      console.log("Variant:", variant, "In Stock:", inStock);
      return inStock;
    });
  };
  console.log(selectedOptions);

  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => {
        const optionName = option?.name;
        return (
          <div className="flex flex-col gap-4" key={optionName}>
            <h4 className="text-base font-semibold">Choose a {optionName}</h4>
            <ul className="flex items-center gap-3">
              {option.choices?.map((choice) => {
                const choiceDescription = choice?.description;
                const disabled = !isVariantInStock({
                  ...selectedOptions,
                  [optionName]: choiceDescription,
                });
                const selected =
                  selectedOptions[optionName] === choiceDescription;
                const clickHandler = disabled
                  ? undefined
                  : () => handleOptionSelect(optionName, choiceDescription);
                return option.name === "Color" ? (
                  <li
                    className="w-8 h-8 rounded-full ring-gray-300 ring-1 relative"
                    style={{
                      backgroundColor: choice.value,
                      cursor: disabled ? "not-allowed" : "pointer",
                    }}
                    onClick={clickHandler}
                  >
                    {selected && (
                      <div className="w-10 h-10 absolute rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    )}
                    {disabled && (
                      <div className="w-10 h-[2px] absolute bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    )}
                  </li>
                ) : (
                  <li
                    className="ring-1 ring-wajed text-wajed rounded-md text-sm py-1 px-4 "
                    style={{
                      cursor: disabled ? "not-allowed" : "pointer",
                      backgroundColor: selected
                        ? "#f35c7a"
                        : disabled
                        ? "#FBCFEB"
                        : "white",
                      color: selected || disabled ? "white" : "#f35c7a",
                      boxShadow: disabled ? "none" : "",
                    }}
                    onClick={clickHandler}
                  >
                    {choiceDescription}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    
    </div>
  );
}

