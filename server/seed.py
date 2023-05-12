from random import randint, choice as rc
from faker import Faker
from app import app
from models import db, Influencer, Campaign, Brand, Region, BrandCampaign, BrandRegion, InfluencerRegion, InfluencerCampaign
from regions import regions
fake = Faker()

youtube_tech_influencers = [
    'https://www.youtube.com/@LinusTechTips',
    'https://www.youtube.com/@Jayztwocents',
    'https://www.youtube.com/@UnboxTherapy',
    'https://www.youtube.com/@AustinEvans'
]
youtube_fashion_influencers = [
    'https://www.youtube.com/@JamesCharles',
    'https://www.youtube.com/@JeffreeStar',
    'https://www.youtube.com/@NikkieTutorials',
    'https://www.youtube.com/@Tati'
]
youtube_fitness_influencers = [
    'https://www.youtube.com/@JeffNippard',
    'https://www.youtube.com/@Coach_MarioRios',
    'https://www.youtube.com/@ScottHermanFitness',
    'https://www.youtube.com/@JeremyEthier'
]

tech_brands = ['iFixit', 'Nord VPN', 'Honey', 'Squarespace']
fashion_brands = ['COS', '& Other Stories', 'Polene', 'Madewell']
fitness_brands = ['Gym Shark', 'Fitbit', 'Under Armour', 'Lulu Lemon']
all_brands = tech_brands + fashion_brands + fitness_brands

def seed_brands():
    for brand in tech_brands:
        new_brand = Brand(
            email=fake.email(),
            brand_name=brand,
            image=fake.image_url()
        )
        new_brand.password_hash = new_brand.email + 'passwordSalt'
        db.session.add(new_brand)
    for brand in fashion_brands:
        new_brand = Brand(
            email=fake.email(),
            brand_name=brand,
            image=fake.image_url()
        )
        new_brand.password_hash = new_brand.email + 'passwordSalt'
        db.session.add(new_brand)
    for brand in fitness_brands:
        new_brand = Brand(
            email=fake.email(),
            brand_name=brand,
            image=fake.image_url()
        )
        new_brand.password_hash = new_brand.email + 'passwordSalt'
        db.session.add(new_brand)
    db.session.commit()

def seed_influencers():
    for influencer in youtube_tech_influencers:
        new_influencer = Influencer(
            name=fake.name(),
            email=fake.email(),
            _password_hash='testpassword',
            image=fake.image_url(),
            rank = randint(1, 100),
            youtube=influencer,
            twitter='',
            instagram=''
        )
        new_influencer.password_hash = new_influencer.email + 'passwordSalt'
        db.session.add(new_influencer)
    for influencer in youtube_fashion_influencers:
        new_influencer = Influencer(
            name=fake.name(),
            email=fake.email(),
            image=fake.image_url(),
            rank = randint(1, 100),
            youtube=influencer,
            twitter='',
            instagram=''
        )
        new_influencer.password_hash = new_influencer.email + 'passwordSalt'
        db.session.add(new_influencer)
    for influencer in youtube_fitness_influencers:
        new_influencer = Influencer(
            name=fake.name(),
            email=fake.email(),
            image=fake.image_url(),
            rank = randint(1, 100),
            youtube=influencer,
            twitter='',
            instagram=''
        )
        new_influencer.password_hash = new_influencer.email + 'passwordSalt'
        db.session.add(new_influencer)
    db.session.commit()
            


def seed_regions():
    for region in regions:
        new_region = Region(region=region)
        db.session.add(new_region)
    db.session.commit()
    
def seed_campaigns():
    for i in range(10):
        new_campaign = Campaign(
            name = rc(all_brands) + ' Campaign',
            budget = randint(1000, 100000),
            product_category = rc(['Tech', 'Fashion', 'Fitness']),
            target_revenue = randint(1000, 100000),
            target_views = randint(1000, 100000),
        )  
        db.session.add(new_campaign)
    db.session.commit()
    
def seed_brand_campaigns():
    for i in range(10):
        new_brand_campaign = BrandCampaign(
            brand_id = randint(1, 12),
            campaign_id = randint(1, 10)
        )
        db.session.add(new_brand_campaign)
    db.session.commit()
    
def seed_brand_regions():
    regions = Region.query.all()
    brands = Brand.query.all()
    for brand in brands:
        new_brand_region = BrandRegion(
            brand_id = brand.id,
            region_id = rc(regions).id
        ) 
        db.session.add(new_brand_region)
    db.session.commit()
    
def seed_influencer_regions():
    regions = Region.query.all()
    influencers = Influencer.query.all()
    for influencer in influencers:
        new_influencer_region = InfluencerRegion(
            influencer_id = influencer.id,
            region_id = rc(regions).id
        )
        db.session.add(new_influencer_region)
    db.session.commit()
    
def seed_influencer_campaigns():
    campaigns = Campaign.query.all()
    influencers = Influencer.query.all()
    for influencer in influencers:
        new_influencer_campaign = InfluencerCampaign(
            influencer_id = influencer.id,
            campaign_id = rc(campaigns).id
        )
        db.session.add(new_influencer_campaign)
    db.session.commit()
    

    


if __name__ == '__main__':

    with app.app_context():
        print('Clearing old data...')
        Influencer.query.delete()
        Campaign.query.delete()
        Brand.query.delete()
        Region.query.delete()
        BrandCampaign.query.delete()
        BrandRegion.query.delete()
        InfluencerRegion.query.delete()
        db.session.commit()
        print('Seeding...')
        seed_brands()
        print('Seeded brands')
        seed_influencers()
        print('Seeded influencers')
        seed_regions()
        print('Seeded regions')
        seed_campaigns()
        print('Seeded campaigns')
        seed_brand_campaigns()
        print('Seeded brand campaigns')
        seed_brand_regions()
        print('Seeded brand regions')
        seed_influencer_regions()
        print('Seeded influencer regions')
        seed_influencer_campaigns()
        print('Seeded influencer campaigns')
        print('Done!')
