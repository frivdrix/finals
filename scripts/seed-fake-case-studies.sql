-- Seed fake case studies for SMM agency
INSERT INTO casestudies (
  caseStudyTitle,
  clientName,
  industry,
  challenge,
  solution,
  results,
  thumbnailImage,
  completionDate,
  displayOrder
) VALUES 
(
  'Fashion Brand Growth - 500% Instagram Followers',
  'StyleHub Fashion Co.',
  'Fashion & Retail',
  'A boutique fashion brand was struggling to reach younger audiences and had only 2K Instagram followers with very low engagement rates.',
  'We created a cohesive visual content strategy, implemented trending audio/music content, partnered with micro-influencers, and optimized posting times. We launched targeted paid campaigns during peak shopping seasons.',
  'Grew followers from 2K to 12K in 6 months. Engagement rate increased from 1.2% to 8.5%. Generated 250+ online sales from Instagram alone, resulting in €45,000 in revenue.',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  NOW(),
  1
),
(
  'E-commerce Store Launch - First Month Sales',
  'TechGear Electronics',
  'E-commerce',
  'New electronics store needed to build brand awareness and drive sales in a highly competitive market with zero social presence.',
  'Built complete social media presence from scratch with product showcase content, customer testimonials, educational tech tips, and consistent daily posting. Implemented carousel ads and video content.',
  'Generated 8,500 followers in first month. Achieved €120,000 in first-month sales through social traffic. Average order value increased 35% through strategic upselling via social content.',
  'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=400&fit=crop',
  NOW(),
  2
),
(
  'Local Restaurant Chain - Foot Traffic Conversion',
  'Gourmet Delights Restaurant Group',
  'Food & Beverage',
  'Multi-location restaurant needed to drive foot traffic and compete with national chains using social media effectively.',
  'Created mouth-watering food photography content, behind-the-scenes kitchen videos, local event promotion, and customer stories. Used location-based targeting and geo-fence ads to drive foot traffic.',
  'Foot traffic increased 380% during campaign periods. Average check size grew from €18 to €28. User-generated content grew 600% with branded hashtag campaign. €500K additional revenue in 6 months.',
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop',
  NOW(),
  3
),
(
  'SaaS Product Launch - B2B Lead Generation',
  'CloudDrive Solutions',
  'Technology/SaaS',
  'Enterprise SaaS platform needed qualified B2B leads and couldn\'t break through the noise in their market to reach decision makers.',
  'Developed LinkedIn-focused strategy with thought leadership content, case study sharing, webinar promotions, and targeted account-based marketing campaigns. Created educational content series.',
  'Generated 450+ qualified leads in 4 months. Cost per lead dropped 65%. LinkedIn engagement rate achieved 12.4%. Converted 38 leads into customers worth €450,000 in annual recurring revenue.',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
  NOW(),
  4
),
(
  'Fitness Brand Community Building',
  'FitLife Studios',
  'Health & Fitness',
  'Boutique fitness studio had 500 followers but struggled with member retention and attracting new clients in a saturated market.',
  'Built engaged community with transformation stories, workout tips, nutrition content, member spotlights, and challenge campaigns. Used TikTok and Reels for viral reach with trending sounds.',
  'Followers grew from 500 to 18,000. Instagram engagement rate: 14.2%. Member retention improved from 65% to 89%. Generated 250+ new memberships worth €125,000 in annual revenue.',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
  NOW(),
  5
),
(
  'Real Estate Agency - Listing Promotion',
  'Urban Properties Realty',
  'Real Estate',
  'Real estate agency had poor social presence and listings weren\'t generating enough inquiry leads despite high-value properties.',
  'Created stunning virtual tour videos, 3D walkthroughs, neighborhood guides, client testimonials, and market trend content. Used carousel ads and video ads for each premium listing.',
  'Website traffic increased 890%. Property inquiry forms increased from 2-3 per week to 15-20 per week. Closed 12 additional deals worth €2.8M in 3 months. Agent leads tripled.',
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
  NOW(),
  6
);
