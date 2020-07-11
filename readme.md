# Pipeline Filter

## Requirements

- Chrome browser
- A page with jenkins output

## Filtering
This plugin filters elements starting with:
- [INFO
- [WARNING
- [DEBUG
- WARNING:
- INFO:
- [CHECKMARKX
- [MSTEST-PLUGIN
- Empty html tags
- Orphan dates in dd.mm.yyyy|hh:mm.ss.fff format
- Duplicate new lines

## Colorizing

This plugin colorizes:
- green for dotnet, Test run, Success
- red for error, failed, FAILURE
- yellow for warning