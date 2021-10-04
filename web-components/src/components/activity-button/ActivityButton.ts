/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import "@/components/button/Button";
import "@/components/icon/Icon";
import { customElementWithCheck } from "@/mixins/CustomElementCheck";
import reset from "@/wc_scss/reset.scss";
import { CSSResultArray, html, LitElement, property } from "lit-element";
import styles from "./scss/module.scss";

/**
 * Momentum activity-button component.
 *
 * @element md-activity-button
 *
 */

export const activityButtonSize = ["56", "68", "84", 56, 68, 84] as const;
export const activityButtonType = [
  "chat",
  "camera",
  "contact-card",
  "meetings",
  "whiteboard",
  "files",
  "share-screen",
  "tasks"
] as const;

export namespace ActivityButton {
  export type Size = typeof activityButtonSize[number];
  export type Type = typeof activityButtonType[number];

  @customElementWithCheck("md-activity-button")
  export class ELEMENT extends LitElement {
    /**
     * Set aria-label text
     * @attr ariaLabel
     */
    @property({ type: String }) ariaLabel = "";
    /**
     * Toggle disabled state
     * @attr disabled
     */
    @property({ type: Boolean }) disabled = false;
    /**
     * Set label text
     * @attr label
     */
    @property({ type: String }) label = "";
    /**
     * Set button size
     * @attr size
     */
    @property({ type: String }) size: ActivityButton.Size = "68";

    _type: ActivityButton.Type = "chat";
    @property({ type: String })
    get type() {
      return this._type;
    }
    set type(value) {
      const oldValue = this.type;
      if (activityButtonType.includes(value)) {
        this._type = value;
      } else {
        this._type = "chat";
      }
      this.requestUpdate("type", oldValue);
    }

    get buttonToIconSizeMapping() {
      return {
        "56": "24",
        "68": "28",
        "84": "36"
      };
    }

    get formatClass() {
      return { "md-activity": true, [`md-activity__${this.type}`]: this.type };
    }

    static get styles(): CSSResultArray {
      return [reset, styles];
    }

    render() {
      return html`
        <md-button
          aria-label=${this.ariaLabel}
          circle
          .activityType=${this.type}
          ?containerLarge=${this.size === "84"}
          ?disabled=${this.disabled}
          .size=${this.size}
          .label=${this.label}
        >
          <md-icon name=${`icon-${this.type}_${this.buttonToIconSizeMapping[this.size]}`}></md-icon>
        </md-button>
      `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "md-activity-button": ActivityButton.ELEMENT;
  }
}
