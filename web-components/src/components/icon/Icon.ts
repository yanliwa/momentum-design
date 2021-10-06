/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import "@/components/button/Button";
import { customElementWithCheck } from "@/mixins/CustomElementCheck";
import reset from "@/wc_scss/reset.scss";
import iconNames from "@momentum-ui/icons/data/iconNames.json";
import getColorValue from "@momentum-ui/utils/lib/getColorValue";
import { html, LitElement, property } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { styleMap } from "lit-html/directives/style-map";
import styles from "./scss/module.scss";

/**
 * Momentum icon component.
 *
 * @element md-icon
 *
 * @part icon
 *
 */

export const iconSize = ["16", "20", "36", "56", 16, 20, 36, 56] as const;
export const iconType = ["", "white"] as const;

export namespace Icon {
  export type Size = typeof iconSize[number];
  export type Type = typeof iconType[number];
  export type ButtonProperty = {
    [key: string]: string;
  };

  @customElementWithCheck("md-icon")
  export class ELEMENT extends LitElement {
    /**
     * Set Icon color
     * @attr color
     */
    @property({ type: String }) color = "";
    /**
     * Set description text
     * @attr description
     */
    @property({ type: String }) description = "";
    /**
     * Set icon name, too Momentum UI Icon valid name found at https://momentum.design/icons
     * @attr name
     */
    @property({ type: String }) name = "";
    /**
     * Set ID
     * @attr id
     */
    @property({ type: String }) id = "";
    /**
     * set Icon size, which will override size sett in the `name` atttribute
     * @attr size
     */
    @property({ type: String }) size = "";
    /**
     * Toggle ability to override size
     * @attr sizeOverrided
     */
    @property({ type: Boolean }) sizeOverrided = false;
    /**
     * Set title text
     * @attr title
     */
    @property({ type: String }) title = "";
    /**
     * set Icon type which sets a style
     * @attr type
     */
    @property({ type: String }) type = "";
    /**
     * Toggle active state
     * @attr isActive
     */
    @property({ type: Boolean }) isActive = false;
    /**
     * @attr isComboBoxIcon
     */
    @property({ type: Boolean }) isComboBoxIcon = false;

    _ariaLabel = "";
    @property({ type: String })
    get ariaLabel() {
      if (this._ariaLabel) {
        return this._ariaLabel;
      }
      if (this.title && this.description) {
        return `${this.title} ${this.description}`;
      }
      if (this.title) {
        return this.title;
      }
      if (this.description) {
        return this.description;
      }
      return "";
    }

    set ariaLabel(value) {
      const oldValue = this._ariaLabel;
      this._ariaLabel = value;
      this.requestUpdate("ariaLabel", oldValue);
    }

    get buttonClassMap() {
      return {
        [`md-button--icon-${this.type}`]: !!this.type
      };
    }

    consoleHandler = (message: string, data: string) => {
      /* eslint-disable no-console */
      switch (message) {
        case "color-warn":
          console.warn(
            `[@momentum-ui/web-component] Icon: ${data} may not exist in the design system,` +
              ` please use a color name from https://momentum.design/styles/color/style`
          );
          break;
        case "name-error":
          console.warn(
            `[@momentum-ui/web-component] Icon: Icon ${data} does not exist in the design system.` +
              ` Visit https://momentum.design/icons for a list of available icons or to request a new icon.`
          );
          break;
      }
      /* eslint-enable no-console */
    };

    get iconFontSize() {
      const defaultSize = 16;
      const sizeFromName = this.name.split("_")[1];
      return this.size || sizeFromName || defaultSize;
    }

    get iconColor() {
      if (this.color.startsWith("#")) {
        this.consoleHandler("color-warn", this.color);
        return this.color;
      } else if (this.color.startsWith("var(")) {
        return this.color;
      } else return getColorValue(this.color);
    }

    get iconClassMap() {
      return {
        "md-combobox-input__icon": this.isComboBoxIcon,
        "md-combobox-input__icon--active": this.isComboBoxIcon && this.isActive,
        [`${this.iconName}`]: !!this.iconName
      };
    }

    get iconName() {
      let iconName = this.name;
      iconName = iconName.startsWith("icon-") ? iconName.substring(5) : iconName;

      if (this.sizeOverrided) {
        return `${iconName.split("_")[0]}_${this.iconFontSize}`;
      }
      return iconNames.includes(iconName) ? `icon-${iconName}` : this.consoleHandler("name-error", iconName);
    }

    get iconStyleMap() {
      return {
        ...(this.iconFontSize && { "font-size": `${this.iconFontSize}px` }),
        ...(this.color && { color: this.iconColor })
      };
    }

    static get styles() {
      return [reset, styles];
    }

    handleIconClick(event: MouseEvent) {
      this.dispatchEvent(
        new CustomEvent("icon-click", {
          bubbles: true,
          composed: true,
          detail: {
            srcEvent: event
          }
        })
      );
    }

    render() {
      return html`
        <i
          part="icon"
          id=${this.id}
          class="md-icon icon ${classMap(this.iconClassMap)}"
          style=${styleMap(this.iconStyleMap)}
          aria-label=${this.ariaLabel}
          title=${this.title}
          @click=${(event: MouseEvent) => this.handleIconClick(event)}
        >
        </i>
      `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "md-icon": Icon.ELEMENT;
  }
}
