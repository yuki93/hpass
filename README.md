# hPass

HMAC-based **password derivation tool** as a Chrome extension.

# Algorithm

`PASSWORD = HTML_SAFE_BASE64( HMAC256( KEY, DOMAIN ) ).SUBSTRING(0, 16)`

# Notes

Remember, this **IS** a `password derivation tool`, this **IS NOT** a `key derivation tool`.

You **CAN** used the derivated password for your online account, because nearly all websites protect your account from brutal-force attacks.

You **SHALL NEVER** use the derivated password as a encryption key, because it **IS NOT** strong enough.

# License

MIT
