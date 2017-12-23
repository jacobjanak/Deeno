from django.shortcuts import render


def index(request):
    context = {'latest_question_list': 'hi'}
    return render(request, 'deeno/index.html', context)
