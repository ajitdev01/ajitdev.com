<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <title>XML Sitemap</title>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <style type="text/css">
          body {
            font-family: monospace;
            white-space: pre;
            padding: 10px;
            font-size: 13px;
          }
        </style>
      </head>
      <body>
        <xsl:copy-of select="."/>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
