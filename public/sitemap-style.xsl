<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>AJITDEV — XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            font-size: 13px;
            color: #334155;
            background-color: #ffffff;
            margin: 0;
            padding: 24px;
          }
          .header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
            padding-bottom: 16px;
            border-bottom: 2px solid #e2e8f0;
          }
          .logo {
            width: 36px;
            height: 36px;
            border-radius: 8px;
            object-fit: cover;
          }
          .title {
            font-size: 18px;
            font-weight: 800;
            color: #0f172a;
            margin: 0;
          }
          .meta {
            font-size: 12px;
            color: #64748b;
            margin-top: 2px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
          }
          th {
            background-color: #f8fafc;
            color: #475569;
            font-weight: 700;
            text-align: left;
            padding: 10px 12px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-bottom: 1px solid #cbd5e1;
          }
          td {
            padding: 10px 12px;
            border-bottom: 1px solid #f1f5f9;
            word-break: break-all;
          }
          tr:nth-child(even) {
            background-color: #fafafa;
          }
          tr:hover td {
            background-color: #f1f5f9;
          }
          a {
            color: #2563eb;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="/logo.png" alt="AJITDEV Logo" class="logo" />
          <div>
            <h1 class="title">AJITDEV XML Sitemap Index</h1>
            <div class="meta">Search Engine Indexing File • Powered by Next.js &amp; Ajit Dev</div>
          </div>
        </div>

        <!-- Sitemap Index Table -->
        <xsl:if test="count(/*[local-name()='sitemapindex']/*[local-name()='sitemap']) &gt; 0">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Sitemap Location</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="/*[local-name()='sitemapindex']/*[local-name()='sitemap']">
                <tr>
                  <td><xsl:value-of select="position()"/></td>
                  <td>
                    <xsl:variable name="itemURL">
                      <xsl:value-of select="*[local-name()='loc']"/>
                    </xsl:variable>
                    <a href="{$itemURL}">
                      <xsl:value-of select="*[local-name()='loc']"/>
                    </a>
                  </td>
                  <td>
                    <xsl:value-of select="*[local-name()='lastmod']"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </xsl:if>

        <!-- URL Set Table -->
        <xsl:if test="count(/*[local-name()='urlset']/*[local-name()='url']) &gt; 0">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>URL Location</th>
                <th>Priority</th>
                <th>Change Frequency</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="/*[local-name()='urlset']/*[local-name()='url']">
                <tr>
                  <td><xsl:value-of select="position()"/></td>
                  <td>
                    <xsl:variable name="itemURL">
                      <xsl:value-of select="*[local-name()='loc']"/>
                    </xsl:variable>
                    <a href="{$itemURL}">
                      <xsl:value-of select="*[local-name()='loc']"/>
                    </a>
                  </td>
                  <td>
                    <xsl:value-of select="*[local-name()='priority']"/>
                  </td>
                  <td>
                    <xsl:value-of select="*[local-name()='changefreq']"/>
                  </td>
                  <td>
                    <xsl:value-of select="*[local-name()='lastmod']"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </xsl:if>

      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
