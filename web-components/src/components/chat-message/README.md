# Avatar

Avatar provides a easy-to-use web component that works well with Lumos design.

### Attributes

- `title` : String - title text
- `src` : String - image src for avatar
- `time` : String - time data to render in chat
- `label` : String - text for avatar label
- `self` : Boolean - toggles message state to indicate that message belongs to the user themself.

### Slots

#### Named Slot

Chat Message will render any content you pass between the `<md-chat-message></md-chat-message>` tags. using the named slot, `slot="message"`

```html
<md-chat-message
  title="Barbara"
  time="11:27AM"
  src="https://static.skillshare.com/uploads/users/7330753/user-image-large.png"
>
  <p slot="message">
    <md-alert message="Who's awesome? You are!" show closable>
      <md-badge slot="alert-icon" color="darkmint" circle>
        <md-icon name="sms_16" color="white"></md-icon>
      </md-badge>
    </md-alert>
  </p>
</md-chat-message>
```
