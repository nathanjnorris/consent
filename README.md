# Consent Status Website

This Jekyll website displays the current consent status and is designed to be accessed via QR code.

## How it works

- The website shows either "CONSENT GIVEN" or "CONSENT WITHDRAWN" based on the configuration
- The status is controlled by the `consent_status` value in `_config.yml`
- The site is automatically deployed to GitHub Pages when changes are pushed to the main branch

## Updating the consent status

To change the consent status:

1. Edit the `_config.yml` file
2. Change the `consent_status` value to either:
   - `"given"` - to show consent is given
   - `"withdrawn"` - to show consent is withdrawn
3. Optionally update the `last_updated` timestamp
4. Commit and push the changes

The GitHub Actions workflow will automatically rebuild and deploy the site.

## Example status changes

**To set consent as given:**

```yaml
consent_status: "given"
last_updated: "2025-07-27 14:30:00"
```

**To withdraw consent:**

```yaml
consent_status: "withdrawn"
last_updated: "2025-07-27 14:30:00"
```

## Site features

- Mobile-responsive design optimized for QR code scanning
- Clear visual indicators (green for given, red for withdrawn)
- Large, easy-to-read text
- Automatic deployment via GitHub Actions
- Timestamp showing when status was last updated

## URL

Once deployed, the site will be available at:
`https://nathanjnorris.github.io/consent`