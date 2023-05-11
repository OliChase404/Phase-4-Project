from flask import Flask, request, jsonify, make_response, session

from config import app, db

from models import db, Influencer, Campaign, Brand, BrandCampaign, BrandRegion, InfluencerRegion, Region, InfluencerCampaign


@app.route('/')
def home():
    return '<h1>Hey Man</h1>'

@app.route('/signupinfluencer', methods=['POST'])
def signup_influencer():
    request_json = request.get_json()
    # check_for_existing_account = Influencer.query.filter_by(influencer_email=request_json.get(email)).all()
    # if check_for_existing_account:
    #     return make_response('Account Already Exists', 422)
        
    name = request_json.get('name')
    email = request_json.get('email')
    image = request_json.get('image')
    youtube = request_json.get('youtube')
    twitter = request_json.get('twitter')
    instagram = request_json.get('instagram')
    new_influencer = Influencer(
        name = name,
        email = email,
        image = image,
        youtube = youtube,
        twitter = twitter,
        instagram = instagram
        )
    password = request_json.get('password')
    new_influencer.password_hash = password
    db.session.add(new_influencer)
    db.session.commit()
    session['user_id'] = new_influencer.id
    session['user_type'] = 'influencer'
    
    return new_influencer.to_dict()
    
@app.route('/Signupbrand', methods=['POST'])
def signup_brand():
    request_json = request.get_json()
    # check_for_existing_account = Brand.query.filter_by(brand_email=request_json.get(email)).all()
    # if check_for_existing_account:
    #     return make_response('Account Already Exists', 422)
        
    new_brand = Brand(
        brand_name = request_json.get('brand_name'),
        email = request_json.get('email'),
        image = request_json.get('image')
    )
    password = request_json.get('password')
    new_brand.password_hash = password
    db.session.add(new_brand)
    db.session.commit()
    session['user_id'] = new_brand.id
    session['user_type'] = 'brand'
    
    return new_brand.to_dict()
    
@app.route('/check_session', methods=['GET'])
def check_session():
    # user = None
    if session.get('user_id'):
        if session.get('user_type') == 'influencer':
            user = Influencer.query.filter(Influencer.id == session['user_id']).first()
        elif session.get('user_type') == 'brand':
            user = Brand.query.filter(Brand.id == session['user_id']).first()
        return user.to_dict(), 200

    return {'error': '401 Unauthorized'}, 401
    

@app.route('/login', methods=['POST'])
def login():
    request_json = request.get_json()
    email = request_json.get('email')
    password = request_json.get('password')
    check_for_influencer_account = Influencer.query.filter(Influencer.email == email).first()
    check_for_brand_account = Brand.query.filter(Brand.email == email).first()
    
    if check_for_influencer_account:
        user = check_for_influencer_account
        if user.authenticate(password):
            session['user_id'] = user.id
            session['user_type'] = 'influencer'
            return user.to_dict(), 200
    elif check_for_brand_account:
        user = check_for_brand_account
        if user.authenticate(password):
            session['user_id'] = user.id
            session['user_type'] = 'brand'
            return user.to_dict(), 200
    
    return {'error': '401 Unauthorized'}, 401

@app.route('/logout', methods=['DELETE'])
def logout():
    
    if session.get('user_id'):
        session['user_id'] = None
        return {}, 204
    return {'error': '401 Unauthorized'}, 401



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
        sorted_regions = sorted(regions, key=lambda r: r.region)
        return jsonify([r.to_dict() for r in sorted_regions])
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
    this_influencer_campaigns = InfluencerCampaign.query.filter_by(influencer_id=id).all()
    these_campaigns = [Campaign.query.get(c.campaign_id) for c in this_influencer_campaigns]
    if request.method == 'GET':
        return jsonify([c.to_dict() for c in these_campaigns])
    elif request.method == 'POST':
        new_campaign = Campaign(**request.json)
        db.session.add(new_campaign)
        db.session.commit()
        new_campaign_id = new_campaign.id
        new_influencer_campaign = InfluencerCampaign(influencer_id=id, campaign_id=new_campaign_id)
        db.session.add(new_influencer_campaign)
        db.session.commit()
        return jsonify(new_campaign.to_dict()), 201
        
    
# @app.route('/influencers/<int:id>/campaigns/<int:campaign_id>', methods=['GET', 'DELETE'])
# def influencers_campaigns_delete(id, campaign_id):
#     influencer = Influencer.query.get(id)
#     campaign = Campaign.query.get(campaign_id)
#     influencer.campaigns.remove(campaign)
#     db.session.commit()
#     return make_response('', 204)

@app.route('/brands/<int:id>/campaigns', methods=['GET', 'POST'])
def brands_campaigns_index(id):
    brand = Brand.query.get(id)
    this_brand_campaigns = BrandCampaign.query.filter_by(brand_id=id).all()
    these_campaigns = [Campaign.query.get(c.campaign_id) for c in this_brand_campaigns]
    if request.method == 'GET':
        return jsonify([c.to_dict() for c in these_campaigns])
    elif request.method == 'POST':
        new_campaign = Campaign(**request.json)
        db.session.add(new_campaign)
        db.session.commit()
        new_campaign_id = new_campaign.id
        new_brand_campaign = BrandCampaign(brand_id=id, campaign_id=new_campaign_id)
        db.session.add(new_brand_campaign)
        db.session.commit()
        return jsonify(new_campaign.to_dict()), 201
    
# @app.route('/brands/<int:id>/campaigns/<int:campaign_id>', methods=['DELETE'])
# def brands_campaigns_delete(id, campaign_id):
#     brand = Brand.query.get(id)
#     campaign = Campaign.query.get(campaign_id)
#     brand.campaigns.remove(campaign)
#     db.session.commit()
#     return make_response('', 204)

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
    
# @app.route('/brands/<int:id>/regions/<int:region_id>', methods=['DELETE'])
# def brands_regions_delete(id, region_id):
#     brand = Brand.query.get(id)
#//     region = Region.query.get(region_id)
#     brand.regions.remove(region)
#     db.session.commit()
#     return make_response('', 204)

@app.route('/influencers/<int:id>/regions', methods=['GET', 'POST'])
def influencers_regions_index(id):
    influencer_regions = InfluencerRegion.query.filter_by(influencer_id=id).all()
    regions = [Region.query.get(r.region_id) for r in influencer_regions]
    if influencer_regions == [] or None or regions == [] or None:
        return make_response('No Data', 204)
    elif request.method == 'GET':
        return jsonify([r.to_dict() for r in regions])
    elif request.method == 'POST':
        region = Region(**request.json)
        db.session.add(region)
        db.session.commit()
        new_influencer_region = InfluencerRegion(influencer_id=id, region_id=region.id)
        db.session.add(new_influencer_region)
        db.session.commit()
        return jsonify(region.to_dict()), 201
    
    
# @app.route('/influencers/<int:id>/regions/<int:region_id>', methods=['DELETE'])
# def influencers_regions_delete(id, region_id):
#     influencer = Influencer.query.get(id)
#//     region = Region.query.get(region_id)
#     influencer.regions.remove(region)
#     db.session.commit()
#     return make_response('', 204)



    
    

if __name__ == '__main__':
    app.run(port=5555, debug=True)