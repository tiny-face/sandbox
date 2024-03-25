content: fields.document({
    label: 'Content',
    links: true,
    layouts: [[1], [1, 1]],
    images: {
      directory: 'src/content/blog/_images',
      publicPath: '/src/content/blog/_images/',
      schema: {
        title: fields.text({
          label: 'Caption',
          description:
            'The text to display under the image in a caption.',
        }),
      },
    },
    dividers: true,
    formatting: {
      alignment: true,
      blockTypes: true,
      headingLevels: true,
      inlineMarks: {
        code: true,
        bold: true,
        italic: true,
        underline: true,
        strikethrough: true,
      },
      listTypes: true,
    },
    tables: true,
  }),

  Once you have configured nginx and unpacked the shell artifact you will need to fill out its configuration, which is located in the root of the artifact inside the env.js file.

  The configuration looks like this:
  
  APP_NAME field - will be used in various parts of the application, in modal windows and notifications.
  APP_ENV field - used to display the env name badge. please use null if you want to hide this badge.
  APP_LOGO field - specifies the path to your application's logo. Both global and relative paths to the logo are supported. But it is best to place your logo in the "assets/images" folder in the artifact folder.
  AUTH_PAGE_LOGO field - specifies the path to the logo that will be displayed on the authentication page. This field is optional, if you don't fill it in, the main logo (APP_LOGO) will be used by default.
  APP_PAGES field - specifies the endpoint that the shell will use when requesting information about pages from the flask api. This means that you must implement a GET endpoint that will return page information.
  The response should be in the following format:
  
  id: - unique id;
  label - the name that will be displayed on the navigation bar.
  icon - icon that will be displayed on the navigation bar. this field is optional, if no icon is specified, the default icon will be used.
  endpoint - in your case this is the endpoint where the corresponding Dash page is located.
