# coding:utf-8
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import models
import requests
import sys

reload(sys)
sys.setdefaultencoding('utf8')
def searchIp(request):
    dic = {
    }
    num = len(models.data.objects.all())
    if num <= 10:
        datas = models.data.objects.order_by('-id')
    else:
        datas = models.data.objects.order_by('-id')[0:10]
    dic = {
        'datas':datas
    }
    return render(request, 'search.html', dic)


@csrf_exempt
def getIp(request):
    ip = request.POST.get('ip')
    myIp = request.POST.get('myIp')
    myAddress = request.POST.get('myAddress')
    result = requests.get('http://ip.taobao.com/service/getIpInfo.php?ip='+ip)
    data = result.json()['data']
    address = data['country']+data['region']+data['city']+data['county']
    ret = {
        'ip':data['ip'],
        'location':address,
        'userip' :myIp,
        'useraddress' :myAddress
    }
    models.data.objects.create(ip = data['ip'], address = address, userip = myIp, useraddress = myAddress)
    return JsonResponse(ret)

