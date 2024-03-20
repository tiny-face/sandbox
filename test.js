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