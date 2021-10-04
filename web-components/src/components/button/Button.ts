/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import activityButtonStyles from "@/components/activity-button/scss/module.scss";
import "@/components/loading/Loading";
import "@/components/spinner/Spinner";
import { Key } from "@/constants";
import { customElementWithCheck } from "@/mixins/CustomElementCheck";
import reset from "@/wc_scss/reset.scss";
import { html, LitElement, property, query } from "lit-element";
import { nothing } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import { ifDefined } from "lit-html/directives/if-defined";
import styles from "./scss/module.scss";

/**
 * Momentum button component.
 *
 * @element md-button
 * @slot - default slot
 * @slot icon - for Icon content
 * @slot text - for text content
 *
 * @part button
 * @part button-container
 * @part button-children
 * @part button-label
 *
 * @fires button-keydown
 * @fires button-click
 */

export const buttonSize = [
  "20",
  "28",
  "32",
  "36",
  "40",
  "44",
  "52",
  "56",
  "72",
  "68",
  "84",
  "size-none",
  20,
  28,
  32,
  36,
  40,
  44,
  52,
  56,
  68,
  72,
  68,
  84
] as const;
export const buttonTag = ["button", "input", "a"] as const;
export const buttonType = ["button", "reset", "submit"] as const;
export const buttonRoles = [
  "button",
  "checkbox",
  "link",
  "menuitem",
  "menuitemcheckbox",
  "menuitemradio",
  "option",
  "radio",
  "switch",
  "tab"
] as const;
export const buttonVariant = ["primary", "secondary", "red", "green", "white", "darkGrey"] as const;
export const buttonColor = [
  "blue",
  "red",
  "green",
  "orange",
  "yellow",
  "mint",
  "purple",
  "pink",
  "cyan",
  "white",
  "dark-gray",
  "duck-egg",
  "violet",
  "color-none",
  ""
] as const;

export namespace Button {
  export type Tag = typeof buttonTag[number];
  export type Type = typeof buttonType[number];
  export type Role = typeof buttonRoles[number];
  export type variant = typeof buttonVariant[number];
  export type color = typeof buttonColor[number];
  export type Attributes = {
    id?: string;
    disabled: boolean;
    alt?: string;
    href?: string;
    type: Type;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaExpanded?: boolean;
    ariaHaspopup?: boolean;
    ariaPressed?: boolean;
    ariaCurrent?: boolean;
    tag: Tag;
    loading: boolean;
    role?: string;
    value: string;
  };
  export type Size = typeof buttonSize[number];

  @customElementWithCheck("md-button")
  export class ELEMENT extends LitElement {
    _active = false;
    @property({ type: Boolean, reflect: true })
    get active() {
      return this._active;
    }
    set active(value) {
      const oldValue = this._active;
      this._active = value;
      this.requestUpdate("active", oldValue);
    }

    private _tabIndex = 0;
    @property({ type: Number, attribute: "tab-index", reflect: true })
    get tabIndex() {
      if (this.disabled) {
        return -1;
      }
      return this._tabIndex;
    }
    set tabIndex(newValue: number) {
      const oldValue = this._tabIndex;
      this._tabIndex = newValue;
      this.requestUpdate("tabIndex", oldValue);
    }

    /**
     * accessibility text that labels the button when text label is not visible on screen
     * @attr ariaLabel
     */
    @property({ type: String }) ariaLabel = "";
    /**
     * accessibility text that labels the button when there is visible text on screen
     * @attr ariaLabelledBy
     */
    @property({ type: String }) ariaLabelledBy = "";
    /**
     * accessibility text to convey that the button's visibility can be toggled - **Inaccurate usage
     * @attr ariaExpanded
     */
    @property({ type: Boolean }) ariaExpanded = false;
    /**
     * accessibility text that indicates availability/type of interactive popup element that the button can trigger.
     * @attr ariaHaspopup
     */
    @property({ type: Boolean }) ariaHaspopup = false;
    /**
     * accessibility text that describes the state of the button - **Inaccurate usage
     * @attr ariaPressed
     */
    @property({ type: Boolean }) ariaPressed = false;
    /**
     * value to set the button shape as a circle
     * @attr circle
     */
    @property({ type: Boolean }) circle = false;
    /**
     * sets the background color of the button
     * @attr color
     */
    @property({ type: String }) color: Button.color = "";
    /**
     * sets the button container to a larger size, usually if you are including a button label
     * @attr containerLarge
     */
    @property({ type: Boolean }) containerLarge = false;
    /**
     * disabled the button visually and functionally
     * @attr disabled
     */
    @property({ type: Boolean }) disabled = false;
    /**
     * adds hyperlink to button when the button property tag is set to anchor (`a`)
     * @attr href
     */
    @property({ type: String }) href = "";
    /**
     * sets the id property of the html button
     * @attr id
     */
    @property({ type: String }) id = "";
    /**
     * sets the value html property to the button when the button property tag is set to input
     * @attr value
     */
    @property({ type: String }) value = "";
    /**
     * renders text positioned below the button within container
     * @attr keyboardKey
     */
    @property({ type: String }) keyboardKey = "";
    /**
     * renders text positioned below the button within container
     * @attr label
     */
    @property({ type: String }) label = "";
    /**
     * displays a loading spinner within button
     * @attr loading
     */
    @property({ type: Boolean }) loading = false;
    /**
     * visually changes the button to have an outline correlating with the color property
     * @attr outline
     */
    @property({ type: Boolean }) outline = false;
    /**
     * removes all default styling to the button
     * @attr hasRemoveStyle
     */
    @property({ type: Boolean }) hasRemoveStyle = false;
    /**
     * sets the size of the button
     * @attr size
     */
    @property({ type: String }) size: Button.Size = "32";
    /**
     * determines the button's html tag (button, input, a)
     * @attr tag
     */
    @property({ type: String }) tag: Button.Tag = "button";
    /**
     * sets the type property of the html button (button, reset, submit)
     * @attr type
     */
    @property({ type: String }) type: Button.Type = "button";
    /**
     * sets the role property of the html button
     * @attr role
     */
    @property({ type: String }) role: Button.Role = "button";
    /**
     * sets the Lumos color variant of the button's background
     * @attr variant
     */
    @property({ type: String }) variant: Button.variant = "secondary";
    /**
     * Set a width override
     * @attr width
     */
    @property({ type: String }) width = "";
    /**
     * Set a max width
     * @attr maxWidth
     */
    @property({ type: String }) maxWidth = "";
    /**
     * sets the activity type for md-activity-button (pre defined icon styles)
     * @attr activityType
     */
    @property({ type: String }) activityType = "";
    /**
     * sets the button visual for icon
     * @attr iconActive
     */
    @property({ type: Boolean }) iconActive = false;
    /**
     * set the function for the button's onClick
     * @attr clickFunction
     */
    @property({ attribute: false }) clickFunction: Function | null = null;

    @query(".md-button") button!: HTMLButtonElement;

    renderWidth = () => {
      return this.width ? `width: ${this.width};` : nothing;
    };

    renderMaxWidth = () => {
      return this.maxWidth ? `max-width: ${this.maxWidth};` : nothing;
    };

    getStyles = () => {
      if (this.width || this.maxWidth) {
        return html`
          <style>
            :host .md-button--${this.size} {
              ${this.renderWidth()};
              ${this.renderMaxWidth()};
            }
          </style>
        `;
      }
    };

    handleKeyDown(event: KeyboardEvent) {
      if (this.disabled) {
        return;
      }
      const { code } = event;
      if (code === Key.Enter || code === Key.Space) {
        this.dispatchEvent(
          new CustomEvent("button-keydown", {
            composed: true,
            bubbles: true,
            detail: {
              srcEvent: event
            }
          })
        );
      }
    }

    handleClick(event: MouseEvent) {
      if (this.disabled) {
        return;
      }
      this.clickFunction && this.clickFunction();
      this.dispatchEvent(
        new CustomEvent("button-click", {
          composed: true,
          bubbles: true,
          detail: {
            srcEvent: event
          }
        })
      );
    }

    static get styles() {
      return [reset, styles, activityButtonStyles];
    }

    get buttonClassMap() {
      return {
        "md-button--circle": this.circle,
        "md-button--none": this.hasRemoveStyle,
        "md-button--outline": this.outline,
        active: this.active && !this.disabled,
        [`md-button--${this.size}`]: !this.hasRemoveStyle,
        [`md-button--${this.color}`]: !this.hasRemoveStyle && !!this.color,
        [`md-activity__${this.activityType}`]: !!this.activityType,
        "md-activity": !!this.activityType,
        "md-button--icon": this.iconActive,
        "md-button--onlyicon": this.hasIcon && !this.slottedText
      };
    }

    get slottedText() {
      return this.querySelector("[slot=text]")?.textContent;
    }

    get hasIcon() {
      return this.querySelector("[slot=icon]") !== null || this.loading;
    }

    iconTemplate = () => {
      if (this.loading) {
        return html`
          <md-spinner size="16"></md-spinner>
        `;
      } else {
        return html`
          <slot name="icon"></slot>
        `;
      }
    };

    textTemplate = () => {
      if (this.circle && this.hasIcon) {
        return nothing;
      } else {
        return html`
          <slot name="text"></slot>
        `;
      }
    };

    childrenTemplate() {
      return html`
        <span part="button-children" class="md-button__children">
          ${this.iconTemplate()} ${this.textTemplate()}
          <slot></slot>
        </span>
      `;
    }

    buttonTemplate(tag: Button.Tag) {
      if (tag === "button") {
        return html`
          <button
            part="button"
            id=${this.id}
            class="md-button ${classMap(this.buttonClassMap)}"
            @click=${(e: MouseEvent) => this.handleClick(e)}
            @keydown=${(e: KeyboardEvent) => this.handleKeyDown(e)}
            tabindex=${this.tabIndex}
            aria-label=${ifDefined(this.ariaLabel || undefined)}
            aria-labelledby=${ifDefined(this.ariaLabelledBy || undefined)}
            aria-expanded=${this.ariaExpanded}
            aria-haspopup=${this.ariaHaspopup}
            type=${this.type}
            role=${this.role}
            ?disabled=${this.disabled || this.loading}
          >
            ${this.childrenTemplate()}
          </button>
        `;
      } else if (tag === "input") {
        return html`
          <input
            part="button"
            id=${this.id}
            class="md-button ${classMap(this.buttonClassMap)}"
            @click=${(e: MouseEvent) => this.handleClick(e)}
            @keydown=${(e: KeyboardEvent) => this.handleKeyDown(e)}
            role=${this.role}
            tabindex=${this.tabIndex}
            aria-pressed=${this.ariaPressed}
            aria-label=${ifDefined(this.ariaLabel || undefined)}
            aria-labelledby=${ifDefined(this.ariaLabelledBy || undefined)}
            type=${this.type}
            alt=${this.label}
            value=${this.value}
            ?disabled=${this.disabled || this.loading}
          />
        `;
      } else if (tag === "a") {
        return html`
          <a
            part="button"
            id=${this.id}
            class="md-button ${classMap(this.buttonClassMap)}"
            @click=${(e: MouseEvent) => this.handleClick(e)}
            @keydown=${(e: KeyboardEvent) => this.handleKeyDown(e)}
            role=${this.role}
            tabindex=${this.tabIndex}
            aria-pressed=${this.ariaPressed}
            aria-label=${ifDefined(this.ariaLabel || undefined)}
            aria-labelledby=${ifDefined(this.ariaLabelledBy || undefined)}
            href=${this.href}
          >
            ${this.childrenTemplate()}
          </a>
        `;
      }
      return nothing;
    }

    render() {
      return html`
        ${this.getStyles()}
        ${this.label
          ? html`
              <div part="button-container" class=${`md-button__container${this.containerLarge ? "" : "--small"}`}>
                ${this.buttonTemplate(this.tag)}
                <div part="button-label" class="md-button__label">
                  ${this.label}
                </div>
              </div>
            `
          : html`
              ${this.buttonTemplate(this.tag)}
            `}
      `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "md-button": Button.ELEMENT;
  }
}
