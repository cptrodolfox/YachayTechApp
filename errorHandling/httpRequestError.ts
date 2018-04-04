this.http.get(url).map(res => res.json()).subscribe(data => {
      // posts = data.data.children;
      this.data = data;
      this.loader.dismiss();
    }, error => {
      console.log(error);
      this.loader.dismiss();
      this.toast.presentToast("Check internet connection");
    });
