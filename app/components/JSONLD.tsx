import React from "react";
import { WithContext, Thing } from "schema-dts";

interface JsonLdProps {
  schema: WithContext<Thing> | Record<string, any>;
}

export default function JSONLD({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
