import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'button link';
  };
  attributes: {
    buttonText: Attribute.String & Attribute.Required;
    buttonLink: Attribute.String & Attribute.Required;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['SECONDARY', 'PRIMARY']>;
  };
}

export interface PageAbout extends Schema.Component {
  collectionName: 'components_page_abouts';
  info: {
    displayName: 'about';
    icon: 'file';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface PageCta extends Schema.Component {
  collectionName: 'components_page_ctas';
  info: {
    displayName: 'CTA';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    subHeader: Attribute.String;
    SecondaryButton: Attribute.Component<'page.link'>;
    image: Attribute.Media & Attribute.Required;
    primaryButton: Attribute.Component<'page.link', true>;
  };
}

export interface PageLink extends Schema.Component {
  collectionName: 'components_page_links';
  info: {
    displayName: 'link';
    description: '';
    icon: 'link';
  };
  attributes: {
    text: Attribute.String;
    herf: Attribute.String;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'meta data';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.button-link': ElementsButtonLink;
      'page.about': PageAbout;
      'page.cta': PageCta;
      'page.link': PageLink;
      'seo.meta-data': SeoMetaData;
    }
  }
}
