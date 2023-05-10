from random import randint, choice as rc
from faker import Faker
from app import app
from models import db, Influencer, Campaign, Brand, Region, BrandCampaign, BrandRegion, InfluencerRegion
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


def seed_brands():
    for brand in tech_brands:
        new_brand = Brand(
            email=fake.email(),
            brand_name=brand,
            password=fake.password(),
            image=fake.image_url()
        )
        db.session.add(new_brand)
    for brand in fashion_brands:
        new_brand = Brand(
            email=fake.email(),
            brand_name=brand,
            password=fake.password(),
            image=fake.image_url()
        )
        db.session.add(new_brand)
    for brand in fitness_brands:
        new_brand = Brand(
            email=fake.email(),
            brand_name=brand,
            password=fake.password(),
            image=fake.image_url()
        )
        db.session.add(new_brand)
    db.session.commit()

def seed_influencers():
    for influencer in youtube_tech_influencers:
        new_influencer = Influencer(
            name=fake.name(),
            email=fake.email(),
            password=fake.password(),
            image=fake.image_url(),
            rank = 0,
            youtube=influencer,
            twitter='',
            instagram=''
        )
        db.session.add(new_influencer)
    for influencer in youtube_fashion_influencers:
        new_influencer = Influencer(
            name=fake.name(),
            email=fake.email(),
            password=fake.password(),
            image=fake.image_url(),
            rank = 0,
            youtube=influencer,
            twitter='',
            instagram=''
        )
        db.session.add(new_influencer)
    for influencer in youtube_fitness_influencers:
        new_influencer = Influencer(
            name=fake.name(),
            email=fake.email(),
            password=fake.password(),
            image=fake.image_url(),
            rank = 0,
            youtube=influencer,
            twitter='',
            instagram=''
        )
        db.session.add(new_influencer)
    db.session.commit()
            


def seed_regions():
    for region in regions:
        new_region = Region(region=region)
        db.session.add(new_region)
    db.session.commit()


if __name__ == '__main__':

    with app.app_context():
        print('Seeding...')
        seed_brands()
        print('Seeded brands')
        seed_influencers()
        print('Seeded influencers')
        seed_regions()
        print('Seeded regions')
        print('Done!')
