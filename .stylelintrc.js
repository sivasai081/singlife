module.exports = {
  extends: ["stylelint-config-standard"],
  overrides: [
    {
      files: ["**/*.tsx"],
      customSyntax: "postcss-styled-syntax",
      rules: {
        "alpha-value-notation": "number", // Opacity value in rgb should be in number format - https://stylelint.io/user-guide/rules/alpha-value-notation/#number
        "color-hex-length": "long", // 6 characters in color hex
        "value-keyword-case": null, // Not require "theme.colors.singlifeRed" to be "theme.colors.singlifered"
        "selector-class-pattern": null, // Not require kebab-case for class name
        "block-no-empty": null, // Not work with theme, issue is reported https://github.com/hudochenkov/postcss-styled-syntax/issues/3
        "unit-disallowed-list": [
          "px",
          {
            ignoreProperties: {
              px: [
                "/^border/",
                "outline",
                "box-shadow",
                "filter",
                "background-position",
                "/^text-decoration/",
                "transform",
                "top",
                "left",
                "right",
                "bottom",
              ],
            },
          },
        ],
      },
    },
  ],
};
