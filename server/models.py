from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

convention = {
  "ix": "ix_%(column_0_label)s",
  "uq": "uq_%(table_name)s_%(column_0_name)s",
  "ck": "ck_%(table_name)s_%(constraint_name)s",
  "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
  "pk": "pk_%(table_name)s"
}

metadata = MetaData(naming_convention=convention)

db = SQLAlchemy(metadata=metadata)

class Influencer(db.Model, SerializerMixin):
    __tablename__ = 'influencers'
    serialize_rules = ('-influencer_campaigns', '-campaigns')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String)
    rank = db.Column(db.Integer)
    youtube = db.Column(db.String, unique=True)
    twitter = db.Column(db.String, unique=True)
    instagram = db.Column(db.String, unique=True)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    influencer_campaigns = db.relationship('Campaign', back_populates='influencer')
    campaigns = association_proxy('influencer_campaigns', 'campaigns', creator=lambda c: InfluencerCampaign(campaigns=c))
    
class InfluencerCampaign(db.Model, SerializerMixin):
    __tablename__ = 'influencer_campaigns'
    serialize_rules = ('-influencers', '-campaigns')
    
    id = db.Column(db.Integer, primary_key=True)
    influencer_Id = db.Column(db.Integer, db.ForeignKey('influencers.id'))
    campaign_Id = db.Column(db.Integer, db.ForeignKey('campaigns.id'))
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())
    
    influencers = db.relationship('Influencer', back_populates='influencer_campaigns')
    campaigns = db.relationship('Campaign', back_populates='influencer_campaigns')
    
    

class Campaign(db.Model, SerializerMixin):
    __tablename__ = 'campaigns'
    serialize_rules = ('-influencer_campaigns', '-campaigns')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    budget = db.Column(db.Integer)
    product_category = db.Column(db.String)
    target_revenue = db.Column(db.Integer)
    target_views = db.Column(db.Integer)
    brand_id = db.Column(db.Integer, db.ForeignKey('brands.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    influencer_campaigns = db.relationship('Influencer', back_populates='campaigns')
    influencers = association_proxy('Influencer_campaigns', 'influencers', creator=lambda i: InfluencerCampaign(influencers=i))
    
    brand_campaigns = db.relationship('Brand', back_populates='campaigns')
    brand = association_proxy('brand_campaigns', 'brands', creator=lambda b: BrandCampaign(brand=b))
    
    
class BrandCampaign(db.Model, SerializerMixin):
    __tablename__ = 'brand_campaigns'
    serialize_rules = ('-brand', '-campaign')
    
    id = db.Column(db.Integer, primary_key=True)
    brand_id = db.Column(db.Integer, db.ForeignKey('brands.id'))
    campaign_id = db.Column(db.Integer, db.ForeignKey('campaigns.id'))
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())
    
    campaign = db.relationship('Campaign', back_populates='brand_campaigns')
    brand = db.relationship('Brand', back_populates='brand_campaigns')
    


class Brand(db.Model):
    __tablename__ = 'brands'
    serialize_rules = ('-brand_campaign', '-campaign')
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, unique=True)
    brand_name = db.Column(db.String)
    password = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    campaigns = db.relationship('Campaign', back_populates='brands')
    brand_campaigns = db.relationship('Campaign', back_populates='brand_campaigns')
    

    


