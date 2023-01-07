# Entity Framework Commands

### Web site for documentation

- <p>  https://learn.microsoft.com/en-us/ef/core/cli/dotnet </p>

### Commands

| Syntax                          | Description                                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------------------ |
| -p --project \<PROJECT>         | Relative path to the project folder of the target project. Default value is the current folder.  |
| -s --startup-project \<PROJECT> | Relative path to the project folder of the startup project. Default value is the current folder. |

### Create a migration

`dotnet ef migrations add InitialIdentityModel -p Infrastructure -s GradeCheckbookApi --output-dir Identity/Migrations`

### Apply migration

`dotnet ef database update -p Infrastructure -s GradeCheckbookApi`
