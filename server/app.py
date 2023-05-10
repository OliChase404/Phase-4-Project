from flask import Flask, request, jsonify, make_response
from flask_migrate import Migrate

from models import db, Influencer, Campaign, Brand, BrandCampaign, BrandRegion, InfluencerRegion, Region, InfluencerCampaign

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

@app.route('/')
def home():
    return '<h1>Hey Man</h1>'


@app.route('/influencers', methods=['GET', 'POST'])
def influencers_index():
    if request.method == 'GET':
        influencers = Influencer.query.all()
        return jsonify([i.to_dict() for i in influencers])
    elif request.method == 'POST':
        new_influencer = Influencer(**request.json)
        db.session.add(new_influencer)
        db.session.commit()
        return jsonify(new_influencer.to_dict()), 201
    
@app.route('/influencers/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def influencers_show(id):
    influencer = Influencer.query.get(id)
    if request.method == 'GET':
        return jsonify(influencer.to_dict())
    elif request.method == 'PATCH':
        for key, value in request.json.items():
            setattr(influencer, key, value)
        db.session.commit()
        return jsonify(influencer.to_dict())
    elif request.method == 'DELETE':
        db.session.delete(influencer)
        db.session.commit()
        return make_response('', 204)
    
@app.route('/brands', methods=['GET', 'POST'])
def brands_index():
    if request.method == 'GET':
        brands = Brand.query.all()
        return jsonify([b.to_dict() for b in brands])
    elif request.method == 'POST':
        new_brand = Brand(**request.json)
        db.session.add(new_brand)
        db.session.commit()
        return jsonify(new_brand.to_dict()), 201
    
@app.route('/brands/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def brands_show(id):
    brand = Brand.query.get(id)
    if request.method == 'GET':
        return jsonify(brand.to_dict())
    elif request.method == 'PATCH':
        for key, value in request.json.items():
            setattr(brand, key, value)
        db.session.commit()
        return jsonify(brand.to_dict())
    elif request.method == 'DELETE':
        db.session.delete(brand)
        db.session.commit()
        return make_response('', 204)
    
@app.route('/campaigns', methods=['GET', 'POST'])
def campaigns_index():
    if request.method == 'GET':
        campaigns = Campaign.query.all()
        return jsonify([c.to_dict() for c in campaigns])
    elif request.method == 'POST':
        new_campaign = Campaign(**request.json)
        db.session.add(new_campaign)
        db.session.commit()
        return jsonify(new_campaign.to_dict()), 201

@app.route('/campaigns/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def campaigns_show(id):
    campaign = Campaign.query.get(id)
    if request.method == 'GET':
        return jsonify(campaign.to_dict())
    elif request.method == 'PATCH':
        for key, value in request.json.items():
            setattr(campaign, key, value)
        db.session.commit()
        return jsonify(campaign.to_dict())
    elif request.method == 'DELETE':
        db.session.delete(campaign)
        db.session.commit()
        return make_response('', 204)
    
@app.route('/regions', methods=['GET', 'POST'])
def regions_index():
    if request.method == 'GET':
        regions = Region.query.all()
        return jsonify([r.to_dict() for r in regions])
    elif request.method == 'POST':
        new_region = Region(**request.json)
        db.session.add(new_region)
        db.session.commit()
        return jsonify(new_region.to_dict()), 201

@app.route('/regions/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def regions_show(id):
    region = Region.query.get(id)
    if request.method == 'GET':
        return jsonify(region.to_dict())
    elif request.method == 'PATCH':
        for key, value in request.json.items():
            setattr(region, key, value)
        db.session.commit()
        return jsonify(region.to_dict())
    elif request.method == 'DELETE':
        db.session.delete(region)
        db.session.commit()
        return make_response('', 204)
    
@app.route('/influencers/<int:id>/campaigns', methods=['GET', 'POST'])
def influencers_campaigns_index(id):
    influencer = Influencer.query.get(id)
    if request.method == 'GET':
        return jsonify([c.to_dict() for c in influencer.campaigns])
    elif request.method == 'POST':
        campaign = Campaign(**request.json)
        influencer.campaigns.append(campaign)
        db.session.commit()
        return jsonify(campaign.to_dict()), 201
    
@app.route('/influencers/<int:id>/campaigns/<int:campaign_id>', methods=['DELETE'])
def influencers_campaigns_delete(id, campaign_id):
    influencer = Influencer.query.get(id)
    campaign = Campaign.query.get(campaign_id)
    influencer.campaigns.remove(campaign)
    db.session.commit()
    return make_response('', 204)

@app.route('/brands/<int:id>/campaigns', methods=['GET', 'POST'])
def brands_campaigns_index(id):
    brand = Brand.query.get(id)
    if request.method == 'GET':
        return jsonify([c.to_dict() for c in brand.campaigns])
    elif request.method == 'POST':
        campaign = Campaign(**request.json)
        brand.campaigns.append(campaign)
        db.session.commit()
        return jsonify(campaign.to_dict()), 201
    
@app.route('/brands/<int:id>/campaigns/<int:campaign_id>', methods=['DELETE'])
def brands_campaigns_delete(id, campaign_id):
    brand = Brand.query.get(id)
    campaign = Campaign.query.get(campaign_id)
    brand.campaigns.remove(campaign)
    db.session.commit()
    return make_response('', 204)

@app.route('/brands/<int:id>/regions', methods=['GET', 'POST'])
def brands_regions_index(id):
    brand = Brand.query.get(id)
    if request.method == 'GET':
        return jsonify([r.to_dict() for r in brand.regions])
    elif request.method == 'POST':
        region = Region(**request.json)
        brand.regions.append(region)
        db.session.commit()
        return jsonify(region.to_dict()), 201
    
@app.route('/brands/<int:id>/regions/<int:region_id>', methods=['DELETE'])
def brands_regions_delete(id, region_id):
    brand = Brand.query.get(id)
    region = Region.query.get(region_id)
    brand.regions.remove(region)
    db.session.commit()
    return make_response('', 204)

@app.route('/influencers/<int:id>/regions', methods=['GET', 'POST'])
def influencers_regions_index(id):
    influencer = Influencer.query.get(id)
    if request.method == 'GET':
        return jsonify([r.to_dict() for r in influencer.regions])
    elif request.method == 'POST':
        region = Region(**request.json)
        influencer.regions.append(region)
        db.session.commit()
        return jsonify(region.to_dict()), 201
    
@app.route('/influencers/<int:id>/regions/<int:region_id>', methods=['DELETE'])
def influencers_regions_delete(id, region_id):
    influencer = Influencer.query.get(id)
    region = Region.query.get(region_id)
    influencer.regions.remove(region)
    db.session.commit()
    return make_response('', 204)



    
    

if __name__ == '__main__':
    app.run(port=5555, debug=True)