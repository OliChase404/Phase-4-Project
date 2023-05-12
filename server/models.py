from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property

from config import app, db, bcrypt


class Influencer(db.Model, SerializerMixin):
    __tablename__ = 'influencers'
    serialize_rules = ('-influencer_campaigns', '-campaigns')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)
    image = db.Column(db.String)
    rank = db.Column(db.Integer)
    youtube = db.Column(db.String)
    twitter = db.Column(db.String)
    instagram = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    influencer_campaigns = db.relationship('InfluencerCampaign', back_populates='influencers')
    campaigns = association_proxy('influencer_campaigns', 'campaign', creator=lambda c: InfluencerCampaign(campaign=c))
    influencer_regions = db.relationship('InfluencerRegion', back_populates='influencer')
    
    @hybrid_property
    def password_hash(self):
        raise AttributeError('Password hashes may not be viewed.')

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))
    
class Brand(db.Model, SerializerMixin):
    __tablename__ = 'brands'
    serialize_rules = ('-brand_campaigns', '-campaigns')
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String)
    brand_name = db.Column(db.String)
    _password_hash = db.Column(db.String)
    image = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    brand_campaigns = db.relationship('BrandCampaign', back_populates='brands')
    campaigns = association_proxy('brand_campaigns', 'campaign', creator=lambda c: BrandCampaign(campaign=c))
    
    brand_regions = db.relationship('BrandRegion', back_populates='brand')
    regions = association_proxy('brand_regions', 'region', creator=lambda r: BrandRegion(region=r))
    
    @hybrid_property
    def password_hash(self):
        raise AttributeError('Password hashes may not be viewed.')

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))
    
class InfluencerCampaign(db.Model, SerializerMixin):
    __tablename__ = 'influencer_campaigns'
    serialize_rules = ('-influencers', '-campaigns')
    
    id = db.Column(db.Integer, primary_key=True)
    influencer_id = db.Column(db.Integer, db.ForeignKey('influencers.id'))
    campaign_id = db.Column(db.Integer, db.ForeignKey('campaigns.id'))
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())
    
    influencers = db.relationship('Influencer', back_populates='influencer_campaigns')
    campaigns = db.relationship('Campaign', back_populates='influencer_campaigns')
    

class Campaign(db.Model, SerializerMixin):
    __tablename__ = 'campaigns'
    serialize_rules = ('-influencer_campaigns', '-campaigns', '-brand_campaigns', '-brand')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    budget = db.Column(db.Integer)
    product_category = db.Column(db.String)
    target_revenue = db.Column(db.Integer)
    target_views = db.Column(db.Integer)
    # brand_id = db.Column(db.Integer, db.ForeignKey('brands.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    influencer_campaigns = db.relationship('InfluencerCampaign', back_populates='campaigns')
    influencers = association_proxy('influencer_campaigns', 'influencer', creator=lambda i: InfluencerCampaign(influencer=i))
    
    brand_campaigns = db.relationship('BrandCampaign', back_populates='campaigns')
    brand = association_proxy('brand_campaigns', 'brands', creator=lambda b: BrandCampaign(brand=b))
    
    
class BrandCampaign(db.Model, SerializerMixin):
    __tablename__ = 'brand_campaigns'
    serialize_rules = ('-brand', '-campaign')
    
    id = db.Column(db.Integer, primary_key=True)
    brand_id = db.Column(db.Integer, db.ForeignKey('brands.id'))
    campaign_id = db.Column(db.Integer, db.ForeignKey('campaigns.id'))
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())
    
    campaigns = db.relationship('Campaign', back_populates='brand_campaigns')
    brands = db.relationship('Brand', back_populates='brand_campaigns')
    
    
    
    
class BrandRegion(db.Model, SerializerMixin):
    __tablename__ = 'brand_regions'
    serialize_rules = ('-brand', '-region')
    
    id = db.Column(db.Integer, primary_key=True)
    brand_id = db.Column(db.Integer, db.ForeignKey('brands.id'))
    region_id = db.Column(db.Integer, db.ForeignKey('regions.id'))
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())
    
    brand = db.relationship('Brand', back_populates='brand_regions')
    region = db.relationship('Region', back_populates='brand_regions')
    
    
class InfluencerRegion(db.Model, SerializerMixin):
    __tablename__ = 'influencer_regions'
    serialize_rules = ('-influencer', '-region')
    
    id = db.Column(db.Integer, primary_key=True)
    influencer_id = db.Column(db.Integer, db.ForeignKey('influencers.id'))
    region_id = db.Column(db.Integer, db.ForeignKey('regions.id'))
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())
    
    influencer = db.relationship('Influencer', back_populates='influencer_regions')
    region = db.relationship('Region', back_populates='influencer_regions')
    
    
class Region(db.Model, SerializerMixin):
    __tablename__ = 'regions'
    serialize_rules = ('-brand_regions', '-influencer_regions')
    
    id = db.Column(db.Integer, primary_key=True)
    region = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    brand_regions = db.relationship('BrandRegion', back_populates='region')
    brands = association_proxy('brand_regions', 'brand', creator=lambda b: BrandRegion(brand=b))
    
    influencer_regions = db.relationship('InfluencerRegion', back_populates='region')
    influencers = association_proxy('influencer_regions', 'influencer', creator=lambda i: InfluencerRegion(influencer=i))
    
    
    
    
    
    

    


