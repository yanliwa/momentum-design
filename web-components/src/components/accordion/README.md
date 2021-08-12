# Accordion
[Live Demo](https://momentum-design.github.io/momentum-ui/?path=/story/components-accordion--accordion)

The Accordion pattern uses a sub-component composition pattern to enable collapsible content grouping. Compose Accordions using the `<md-accordion>` element as the outer wrapper, with `<md-accordion-item>`s within, which can hold any HTML content.

### Attributes

- `multiple` : Boolean - toggles multiple accordion render feature

# Accordion Item

- `label` : String - label text
- `disabled` : Boolean - toggle disabled state
- `expanded` : Boolean - toggle expanded state
- `level` : Number - explicit setting for hierarchical level via `aria-level` attribute

### Styling

The wrapping container of the component can be reached via CSS by using the `::part()` selector. For example, in your application's stylesheet you can say:

```CSS
md-accordion::part(accordion) {
  font-size: 14px;
  width: 500px;
}
```

And within Accordion Item:
`md-accordion::part(accordion-header) {}`
`md-accordion::part(accordion-button) {}`
`md-accordion::part(accordion-panel) {}`

### Slots

#### Accordion Named Slots

To add an accordion item, you must give the `<md-accordion-item>` inside a named slot: `slot="accordion-item"`.

#### Accordion Item Slots

Accordion Items have generic slots, and will render any HTML passed in.

```html
<md-accordion class="part-demo">
  <md-accordion-item slot="accordion-item" label="Header №1" expanded class="part-demo">
    <div slot="header-content" class="test-class">
      <h4>Slotted Header Content</h4>
      <p>lorem ipsum ploppum bootum flossy noop</p>
    </div>
    <div>Panel №1</div>
  </md-accordion-item>
  <md-accordion-item slot="accordion-item" label="Header №2">
    <div>Panel №2</div>
    <md-input type="text"></md-input>
    <md-input type="text" disabled></md-input>
    <md-input type="text"></md-input>
  </md-accordion-item>
  <md-accordion-item slot="accordion-item" label="Header №3" expanded>
    <div>Panel №3</div>
    <md-input type="text"></md-input>
  </md-accordion-item>
  <md-accordion-item slot="accordion-item" label="Header №4" disabled>
    <div>Panel №4</div>
  </md-accordion-item>
  <md-accordion-item slot="accordion-item" label="Header №5">
    <div>Panel №5</div>
  </md-accordion-item>
</md-accordion>
```
