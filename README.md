# AxeFx Ultra MIDI Patch Change

I don't have a MIDI controller for my AxeFx Ultra, so every time I'm recording and need to change patches I have to patiently spin the value wheel until I get to my desired patch.

I build this quick script that allows you to use the CLI to change patches.

This is the first version of this tool, so for now you'll need to install Node.js in order to run it.

In the future, I'd like to make this an actual GUI tool that holds a bunch of buttons with patch numbers.  Baby steps.

# Usage

```node patch_change.js 006```

# Dependencies

This script uses [DHSendMIDI](https://github.com/DouglasHeriot/DHSendMIDI) from Douglas Heriot.

# Want to help?

Awesome! Send me a PR!

# License
[MIT License](http://alco.mit-license.org)
